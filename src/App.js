import React from 'react';
import ArtistContainer from './containers/ArtistContainer';
import SideBar from './components/SideBar';
import ArtistPage from './components/ArtistPage';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import './styles/App.css';

class App extends React.Component {

  state = {
    artists: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/artists")
    .then(res => res.json())
    .then(artists => this.setState({ artists }))
  }

  mainPage = () => {
    return <ArtistContainer artists={this.state.artists} /> 
  }

  artistPage = (renderProps) => {
    let id = renderProps.match.params.id;
    let artist = this.state.artists.find(artist => artist.id === Number(id));
    return <ArtistPage artist={artist} />
  }

  render() {
    return (
      <div className="App">
          <SideBar />
          <Router>
            <Route exact path="/" render={ this.mainPage }  />
            <Route path="/artist/:id" render={ this.artistPage } />            
          </Router>
      </div>
    );
  }
}

export default App;
