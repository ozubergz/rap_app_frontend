import React from 'react';
import ArtistContainer from './containers/ArtistContainer';
import SideBar from './components/SideBar';
import ArtistPage from './components/ArtistPage';
import { Route, Switch } from "react-router";
import './styles/App.css';

class App extends React.Component {

  state = {
    artists: [],
    user: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/artists")
    .then(res => res.json())
    .then(artists => this.setState({ artists }));

    
  }

  mainPage = () => {
    return <ArtistContainer artists={this.state.artists} /> 
  }

  artistPage = (renderProps) => {
    let id = renderProps.match.params.id;
    let artist = this.state.artists.find(artist => artist.id === Number(id));
    if(artist) return <ArtistPage artist={artist} id={id}/>
  }

  render() {
    return (
      <div className="App">
          <SideBar />
          <Switch>
            <Route exact path="/" render={ this.mainPage }  />
            <Route path="/artist/:id" render={ this.artistPage } />            
          </Switch>
      </div>
    );
  }
}

export default App;
