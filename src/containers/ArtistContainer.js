import React, { Component } from 'react';
import Artist from '../components/Artist';
import Search from '../components/Search';
import { Grid } from 'semantic-ui-react';
import uuid from 'uuid';
import '../styles/ArtistContainer.css';

class ArtistsContainer extends Component {




    render() {
        return (
            <div className="artist-container">
                <Search handleSearchOnChange={this.props.handleSearchOnChange} searchValue={this.props.searchValue}/>
                <Grid>
                    <Grid.Row columns={5}>
                        {/* {!this.props.searchResults ? this.props.artists.map(artist => {return <Artist key={uuid()} artist={artist} />}) 
                        : 
                        this.props.artists.map(artist => {return <Artist key={uuid()} artist={artist} />})} */}

                        {this.props.artistsToRender.map (artist =>
                            {return <Artist key={uuid()} artist={artist} />}
                            )}
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ArtistsContainer;

