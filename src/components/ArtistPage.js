import React, { Component } from 'react';
import '../styles/ArtistPage.css';

class ArtistPage extends Component {

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