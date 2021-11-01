import React, { useState } from "react";
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

const initialUserCredentialsState = {
  email: "",
  password: "",
};

const SignIn = ({ googleSignIn, emailSignIn }) => {
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentialsState
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    emailSignIn(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
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
};
const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
