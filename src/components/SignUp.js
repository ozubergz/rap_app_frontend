import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'


class SignUp extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleCreateUser}>
                <Form.Field>
                    <label>Username</label>
                    <input 
                        onChange={this.props.handleSignUpInputs}
                        name="username"
                        placeholder='Username'
                        value={this.props.username}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input 
                        onChange={this.props.handleSignUpInputs} 
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

export default SignUp;