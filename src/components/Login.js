import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'


class Login extends Component {
    render() {
        return (
            
            <Form onSubmit={this.props.handleLogin}>
                <h1>Login</h1>
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
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default Login;