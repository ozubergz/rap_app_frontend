import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import uuid from 'uuid';

import '../styles/ArtistPage.css';

class ArtistPage extends Component {
    
    renderCommentsList() {
        return this.props.artist.comments.map(comment => { 
           return (
                <div key={uuid()} className="comment-body">
                    <div className="username">
                       {comment.user.username}
                    </div>
                    <div className="comment-content">
                        {comment.content}
                    </div>
                </div>
           )
        });
    }

    render() {
        const imgStyle = {
            backgroundImage: `url(${this.props.artist.profile_pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }

        return (
            <div className="artist-page">
                <Container>
                    <div className="artist-header">
                        <div className="artist-left">
                            <div className="artist-pic" style={imgStyle} ></div>
                        </div>
                        <div className="artist-info">
                            <h1>{this.props.artist.name}</h1>
                            <div className="artist-bio">
                                <p>{this.props.artist.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="comments-container">
                        <div className="comment-list">
                            {this.renderCommentsList()}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ArtistPage;