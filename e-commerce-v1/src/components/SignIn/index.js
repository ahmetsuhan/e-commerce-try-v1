import React from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput/index";

import "./signIn.scss";

import CustomButton from "../CustomButton/index";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/User/userAction";

import {
  SignInContainer,
  SignInTitle,
  ButtonBarContainer,
} from "./sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { emailSignIn } = this.props;

    const { email, password } = this.state;

    emailSignIn(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignIn } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonBarContainer>
        </form>
      </SignInContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart),
  emailSignIn: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
