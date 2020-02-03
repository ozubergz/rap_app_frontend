import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router';
import '../styles/LoginPage.css'


class Login extends Component {

    redirectToMain = () => {
        // when redirect is true return to main page
        if(this.props.redirect) {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <Form className="login-form" onSubmit={this.props.handleLogin}>
                <h1 style={{color: "green"}}>Login</h1>
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

export default Login;