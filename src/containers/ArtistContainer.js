import React, { Component } from 'react';
import Artist from '../components/Artist';
import { Grid } from 'semantic-ui-react';
import Search from '../components/Search';

import uuid from 'uuid';
import '../styles/ArtistContainer.css';

class ArtistsContainer extends Component {

    renderArtistList = () => {
        return this.props.artistsToRender.map(artist => {
           return <Artist key={uuid()} artist={artist} /> 
        }) ;
    }

    render() {
        return (
            <div className="artist-container">
                <Search 
                    handleSearchOnChange={this.props.handleSearchOnChange} 
                    searchValue={this.props.searchValue}
                />
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