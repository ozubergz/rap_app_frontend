import React from 'react';
import '../styles/Artist.css'
import { Grid } from 'semantic-ui-react'

const Artist = (props) => {

    const imgStyle = {
        backgroundImage: `url(${props.artist.profile_pic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

    return (
        <Grid.Column>
            <div className="artist-card" >
                <div className="artist-img" style={imgStyle}>
                    
                    <div className="artist-name">{props.artist.name}</div>
                </div>
            </div>
        </Grid.Column>
    )
}

export default Artist;