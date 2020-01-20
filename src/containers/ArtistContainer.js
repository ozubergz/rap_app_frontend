import React, { Component } from 'react';
import Artist from '../components/Artist';
import '../styles/ArtistContainer.css';
import { Grid, Container } from 'semantic-ui-react';
import uuid from 'uuid';

class ArtistsContainer extends Component {

    renderArtistList = () => {
        return this.props.artists.map(artist => <Artist key={uuid()} artist={artist} />)
    }

    render() {
        return (
            <div className="artist-container">
                <Grid>
                    <Grid.Row columns={5}>
                        {this.renderArtistList()}
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ArtistsContainer;