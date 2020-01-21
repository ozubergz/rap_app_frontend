import React from 'react';
import '../styles/Artist.css'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Artist = (props) => {

    const imgStyle = {
        backgroundImage: `url(${props.artist.profile_pic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

    return (
        <Grid.Column>
            <div className="artist-img" style={imgStyle} >
                <Link className="link" to={`/artist/${props.artist.id}`}></Link>
            </div>
        </Grid.Column>
    )
}

export default Artist;