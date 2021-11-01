import { useState } from "react";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton/index";

import "./signUp.scss";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/User/userAction";

const initialUserCredentialsState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentialsState
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <SignUpContainer>
      <SignUpTitle className="title">I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userCredentials.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={userCredentials.email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={userCredentials.password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={userCredentials.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
