import React from 'react';
import { Button, Container } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import './loginForm.css'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { email: '', password: '' };
  }

  handleValidSubmit = async (event, values) => {
    this.setState({ email: values.email, password: values.password });
    this.props.onLogin(this.state.email, this.state.password);
    console.log(`Login Successful`);
  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    console.log(`Login failed`);
  };

  render() {
    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="email"
          label="Email"
          type="text"
          validate={{
            required: true,
            email: true,
          }}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: 'Please enter your password',
            },
            minLength: {
              value: 10,
              errorMessage: 'Your password must be between 6 and 16 characters',
            },
            maxLength: {
              value: 16,
              errorMessage: 'Your password must be between 6 and 16 characters',
            },
          }}
        />
        <Container className='ButtonsLogIn row justify-content-around' >
          <Button className="w-25" >Registrarse</Button>
          <Button id="submit" className="w-25">
            Ingresar
          </Button>
        </Container>
      </AvForm>
    );
  }
}
