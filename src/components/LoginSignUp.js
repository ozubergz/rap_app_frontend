import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import '../styles/LoginSignUp.css';

class LoginSignUp extends Component {
    render() {
        return (
            <div className="side-bar">
                <div className="header">
                    <h1>RANK RAPPERZ</h1>
                </div>
                <div className="btn-group">
                    <Button className="login-btn" inverted color='green'>
                        <Link className="login-link" to="/login" >Login</Link>
                    </Button>
                    <h4>or</h4>
                    
                    <Button className="signup-btn" inverted color='teal'>
                        <Link className="signup-link" to="/signup" >Sign Up</Link>
                    </Button>
                </div>
          </div>
        );
    }
}

export default LoginSignUp;