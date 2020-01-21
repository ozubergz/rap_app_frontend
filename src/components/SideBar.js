import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import unknownPic from '../images/unknown_pic.png';
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
        return this.props.user.comments.map(comment => <li>{comment.content}</li>)
    }
    
    render() {
        return (
            <div className="side-bar">
                <div className="user-header">
                    {this.renderUserPic()}
                    <h2>{this.props.user.username}</h2>
                </div>
                <div className="user-comments">
                    <h5>Your Comments</h5>
                    <div className="comment-list">
                        {/* {this.renderUserComments()} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;