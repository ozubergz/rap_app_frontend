import React from 'react';
import ArtistContainer from './containers/ArtistContainer';
import SideBar from './components/SideBar';
import ArtistPage from './components/ArtistPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route, Switch } from "react-router";
import { Link, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './styles/App.css';

class App extends React.Component {

  state = {
    artists: [],
    value: "",
    showComments: false,
    user: null,
    username: "",
    password: "",
    redirect: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/artists")
    .then(res => res.json())
    .then(artists => this.setState({ artists }));

    // fetch("http://localhost:3000/api/users/311")
    // .then(res => res.json())
    // .then(user => this.setState({ user }))
  }

  handleCommment = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmitComment = (artist) => {
    let content = this.state.value;
    let artist_id = artist.id;
    let user_id = this.state.user.id;

    if(content.length !== "") {
      fetch("http://localhost:3000/comments", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, artist_id, user_id}) 
      })
      .then(res => res.json())
      .then(newComment => {
        let artists = [ ...this.state.artists ];
        let user = { ...this.state.user };
        
        artists.map(artist => {
          if (artist.id === newComment.artist.id) artist.comments.push(newComment);
          return artist;
        });

        user.comments.push(newComment)
        
        this.setState({ value: "", artists, user })
      });
    }
  }

  handleAddArtist = (artist) => {
    let artist_id = artist.id;
    let user_id = this.state.user.id;

    let artistIds = this.state.user.top_list.map(list => list.artist_id);

    if(!artistIds.includes(artist_id)) {
      fetch("http://localhost:3000/top_lists", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id, artist_id })
      })
      .then(res => res.json())
      .then(newData => {
        let user = {...this.state.user};
        
        let newFavorite = { 
          id: newData.id, 
          user_id: newData.user.id, 
          artist_id: newData.artist.id
        }

        user.top_list.push(newFavorite);
        this.setState({ user });
      });
    }    
  }

  handleRemoveArtist = (artist) => {
    let artist_id = artist.id;
    let topList = this.state.user.top_list;
    let user = this.state.user

    let foundList = topList.find(list => list.artist_id === artist_id);
    
    if(foundList) {
      fetch(`http://localhost:3000/top_lists/${foundList.id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(deletedList => {
        topList = topList.filter(list => list.id !== deletedList.id);
        user.top_list = topList;
        this.setState({ user });
      }); 
    }
  }

  mainPage = () => {
    return <ArtistContainer artists={this.state.artists} /> 
  }

  toggleShowComment = () => {
    this.setState({ showComments: !this.state.showComments})
  }

  artistPage = (renderProps) => {
    let id = renderProps.match.params.id;
    let artist = this.state.artists.find(artist => artist.id === Number(id));
    if(artist) return (
      <ArtistPage 
        value={this.state.value}
        handleSubmitComment={this.handleSubmitComment}
        handleCommment={this.handleCommment} 
        handleRemoveArtist={this.handleRemoveArtist}
        handleAddArtist={this.handleAddArtist}
        artist={artist} 
        id={id}
      />
    );
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCreateUser = () => {
    let username = this.state.username;
    let password = this.state.password;

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
      body: JSON.stringify({ 
        username, 
        password, 
        profile_pic: null
      })
    })
    .then(res => res.json())
    .then(data => {
      if(!data.user) {
        console.log(data[0])
      } else {
        this.setState({ 
          user: data.user,
          username: "",
          password: "",
          redirect: true
        });
      }
    });
  }

  handleLogin = () => {
    let username = this.state.username;
    let password = this.state.password;

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if(!data.user) {
        console.log(data.message)
      } else {
        this.setState({ 
          user: data.user,
          username: "",
          password: "",
          redirect: true
        });
      }
    });
  }

  signupPage = () => {
    return (
      <SignUp 
        redirect={this.state.redirect}
        password={this.state.password}
        username={this.state.username}
        handleCreateUser={this.handleCreateUser}
        handleOnChange={this.handleOnChange}
      />
    )
  }

  loginPage = () => {
    return (
      <Login 
        redirect={this.state.redirect}
        password={this.state.password}
        username={this.state.username}
        handleLogin={this.handleLogin}
        handleOnChange={this.handleOnChange}
      />
    ) 
  }

  renderSideBarUser() {
    let user = this.state.user
    if(user) {
      return (
          <SideBar
            showComments={this.state.showComments}
            toggleShowComment={this.toggleShowComment}
            artists={this.state.artists} 
            user={this.state.user}
          />
      );
    } else {
      return (
        <div className="side-bar">
            <Link to="/login" >Login</Link>
              <div>or</div>
            <Link to="/signup" >Sign Up</Link>
        </div>
      )
      
    }
  }

  render() {
    
    return (
      <div className="App">
          {this.renderSideBarUser()}
          <Switch>
            <Route exact path="/" render={ this.mainPage }  />
            <Route path="/signup" render={ this.signupPage } />
            <Route path="/login" render={ this.loginPage } />
            <Route path="/artist/:id" render={ this.artistPage } />            
          </Switch>
      </div>
    );
  }
}

export default App;
