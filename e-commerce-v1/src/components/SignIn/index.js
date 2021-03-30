import React from 'react';

import FormInput from '../FormInput/index';

import './signIn.scss';

import CustomButton from '../CustomButton/index';

import {auth,signInWithGoogle} from '../../firebase/firebaseUtils';


import {
  SignInContainer,
  SignInTitle,
  ButtonBarContainer
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleSubmit = async event => {
        event.preventDefault();
    
        const {email,password} = this.state;

        try {
           await auth.signInWithEmailAndPassword(email,password);
         
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }

        
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    

    render(){
        return (
            <SignInContainer>
              <SignInTitle>I already have an account</SignInTitle>
              <span>Sign in with your email and password</span>
      
              <form onSubmit={this.handleSubmit}>
                <FormInput
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  value={this.state.email}
                  label='email'
                  required
                />
                <FormInput
                  name='password'
                  type='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label='password'
                  required
                />
                <ButtonBarContainer >
                  <CustomButton type="submit" >
                      Sign In
                  </CustomButton>
                  <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                      Sign in with Google
                  </CustomButton>
                </ButtonBarContainer>
                
              </form>
            </SignInContainer>
          );
    }
}

export default SignIn
