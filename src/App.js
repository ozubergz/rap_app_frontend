import React from 'react';
import ArtistContainer from './containers/ArtistContainer';
import SideBar from './components/SideBar';
import ArtistPage from './components/ArtistPage';
import { Route, Switch } from "react-router";
import './styles/App.css';

class App extends React.Component {

  state = {
    artists: [],
    value: "",
    user: null,
    searchValue: "",
    searchResults: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/artists")
    .then(res => res.json())
    .then(artists => this.setState({  
      artists: artists
    }));

    fetch("http://localhost:3000/api/users/311")
    .then(res => res.json())
    .then(user => this.setState({ user }))
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
      .then(newData => {

        let artists = [...this.state.artists];
        
        artists.map(artist => {
          if (artist.id === newData.artist.id) artist.comments.push(newData);
          return artist;
        });
        
        this.setState({ value: "", artists })
      });
    }
  }

  handleAddArtist = (artist) => {
    let artist_id = artist.id;
    let user_id = this.state.user.id;
    
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
      user.top_list.push(newData)
    });
  }



  artistPage = (renderProps) => {
    let id = renderProps.match.params.id;
    let artist = this.state.artists.find(artist => artist.id === Number(id));
    if(artist) return <ArtistPage 
                        value={this.state.value}
                        handleSubmitComment={this.handleSubmitComment}
                        handleCommment={this.handleCommment} 
                        handleAddArtist={this.handleAddArtist}
                        artist={artist} id={id}
                      />
  }

  renderSideBarUser() {
    let user = this.state.user
    if(user) return <SideBar user={this.state.user} />
  }

  // handleFilter = (e) => {
  //   let updatedList = this.state.artists.filter(function(artist){
  //     return artist.name.toLowerCase().search(
  //       e.target.value.toLowerCase()) !== -1;
  //   });
  //   this.setState({artists: updatedList});
  // }

  handleSearchOnChange = (event) => {
    this.setState({
      searchValue: (event.target.value),
      searchResults: this.state.artists.filter(artist => artist.name.toLowerCase().includes(event.target.value))
    })

  }
  

  mainPage = () => {
    return <ArtistContainer artistsToRender = {!this.state.searchResults ? this.state.artists : this.state.searchResults}
    
    artists={this.state.artists} handleSearchOnChange={this.handleSearchOnChange} searchValue={this.state.searchValue} /> 
  }
  

  render() {
    console.log(this.state)
    
    return (
      <div className="App">
          {this.renderSideBarUser()}
          <Switch>
            <Route exact path="/" render={ this.mainPage }  />
            <Route path="/artist/:id" render={ this.artistPage } />            
          </Switch>
      </div>
    );
  }
}

export default App;
