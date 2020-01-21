import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react'
import uuid from 'uuid';


import '../styles/ArtistPage.css';

class ArtistPage extends Component {
    
    renderCommentsList() {
        if(this.props.artist.comments.length === 0) {
            return <h3>NO COMMENTS HERE...</h3>
        }
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
                            <div className="button-group">
                                <h4>Add Favorite</h4>
                                <button 
                                    onClick={() => this.props.handleAddArtist(this.props.artist)} 
                                    className="ui green button icon circular">
                                    <i className="plus icon"></i>
                                </button>
                                <button 
                                    className="ui red button icon circular">
                                    <i className="minus icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <Form onSubmit={() => this.props.handleSubmitComment(this.props.artist)}>
                        <Form.TextArea 
                            onChange={this.props.handleCommment} 
                            label='COMMENT' 
                            placeholder='Tell us your opinion about this aritst...'
                            value={this.props.value}
                        />
                        <Form.Button >Submit</Form.Button>
                    </Form>
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