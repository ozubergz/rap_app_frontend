import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import unknownPic from '../images/unknown_pic.png';
import uuid from 'uuid';
import '../styles/SideBar.css';

class SideBar extends Component {

    renderUserPic() {
        if(!this.props.user.profile_pic) {
            return <Image className="user-pic" src={unknownPic} size='small' circular />
        } else {
            const imgStyle = {
                backgroundImage: `url(${this.props.user.profile_pic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }
            return <div className="user-pic" style={imgStyle}></div>
        }
    }

    renderUserComments() {
        return this.props.user.comments.map(comment => <div key={uuid()} className="comment-li">{comment.content}</div>)
    }

    renderTopList() {
        let artistIDS = this.props.user.top_list.map(list => list.artist_id);
        let filteredArtists = this.props.artists.filter(artist => {
            let artistPic;
            artistIDS.forEach(id => {
                if(artist.id === id) artistPic = artist
            });
            return artistPic;
        });

        return filteredArtists.map(artist => {

            const imgStyle = {
                backgroundImage: `url(${artist.profile_pic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }

           return (
               <Grid.Column key={uuid()} className="favorite-list-columns">
                   <div className="favorite-list-pics" style={imgStyle}>
                    <Link className="link" to={`/artist/${artist.id}`}></Link>
                   </div>
               </Grid.Column>
            )
        });
    }
    
    render() {
        return (
            <div className="side-bar">
                <div className="user-header">
                    {this.renderUserPic()}
                    <h2>{this.props.user.username}</h2>
                </div>
                <div className="user-comments">
                    {
                        this.props.showComments ? 
                        <button onClick={this.props.toggleShowComment} className="show-comments">
                            LESS COMMENTS <i className="caret square down green icon"></i>
                        </button> :
                        <button onClick={this.props.toggleShowComment} className="show-comments">
                            SHOW COMMENTS <i className="caret square up green icon"></i>
                        </button> 
                    }

                    {
                        this.props.showComments ?
                        <div className="comment-ul">
                            {this.renderUserComments()}
                        </div> : 
                        null
                    }
                    
                    
                </div>
                <h5 className="favorite-lbl">FAVORITES</h5>
                <div className="favorite-box">
                    <Grid>
                        <Grid.Row columns={2}>
                            {this.renderTopList()}
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default SideBar;