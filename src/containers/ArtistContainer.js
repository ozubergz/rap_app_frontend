import React, { Component } from 'react';
import Artist from '../components/Artist';
import { Grid } from 'semantic-ui-react';
import uuid from 'uuid';
import '../styles/ArtistContainer.css';

class ArtistsContainer extends Component {

    renderArtistList = () => {
        return this.props.artists.map(artist => <Artist key={uuid()} artist={artist} />);
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