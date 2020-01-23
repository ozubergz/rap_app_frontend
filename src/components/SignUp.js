import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import '../styles/SignUpPage.css';

class SignUp extends Component {

    redirectToMain = () => {
        // when redirect is true return to main page
        if(this.props.redirect) {
            return <Redirect to="/" />
        }
    }

    render() {
        
        return (
            <Form className="signup-form" onSubmit={this.props.handleCreateUser}>
                <h1>Sign Up</h1>
                <Form.Field>
                    <label>Username</label>
                    <input 
                        type="text"
                        onChange={this.props.handleOnChange}
                        name="username"
                        placeholder='Username'
                        value={this.props.username}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input 
                        type="password"
                        onChange={this.props.handleOnChange} 
                        name="password" 
                        placeholder='Password' 
                        value={this.props.password}
                    />
                </Form.Field>
                {this.redirectToMain()}
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default SignUp;