import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class Login extends React.Component {
  static propTypes = {
    /** should return true or false. should accept {username:string,password:string} as params */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onLogin: PropTypes.func.isRequired
  };
  static defaultProps = {
    foo: 42,
  };
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password:''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    this.props.onLogin(this.state.username,this.state.password);
    event.preventDefault();
  }

  render() {
    return (
			 <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username'
                 type="text" 
                 value={this.state.value} 
                 onChange={this.handleUsernameChange} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Password'
                 type="password" 
                 value={this.state.value} 
                 onChange={this.handlePasswordChange} />
        </Form.Field>
        <Button type='submit'>Submit{this.state.username}</Button>
      </Form>
		);
  }
}