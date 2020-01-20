import React from 'react';
import ArtistContainer from './containers/ArtistContainer';
import SideBar from './components/SideBar';
import './styles/App.css';

class App extends React.Component {

  state ={
    artists: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/artists")
    .then(res => res.json())
    .then(artists => this.setState({ artists }))
  }

  render() {
    
    return (
      <div className="App">
        
          <SideBar />
          <ArtistContainer artists={this.state.artists} />
      </div>
    );
  }
}

export default App;
