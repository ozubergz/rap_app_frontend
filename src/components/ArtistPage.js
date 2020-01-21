import React, { Component } from 'react';
import '../styles/ArtistPage.css';

class ArtistPage extends Component {

    // state = {
    //     artist: this.props.artist
    // }

    // componentDidMount() {
    //     console.log(this.state.artist)
    //     console.log('hello')
    // }

    // fetchArtist() {
        // fetch("http://localhost:3000/api/artists")
        // .then(res => res.json())
        // .then(artists => {
        //     let artist = artists.find(artist => {
        //         return artist.id === Number(this.props.id)
        //     });
        //     this.setState({ artist });
        // });
    // }

    render() {
                
        const imgStyle = {
            backgroundImage: `url(${this.props.artist.profile_pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }

        return (
            <div className="artist-page">
                <div className="artist-img" style={imgStyle} ></div>
                <h1>{this.props.artist.name}</h1>
            </div>
        );
    }
}

export default ArtistPage;