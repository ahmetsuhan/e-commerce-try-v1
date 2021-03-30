import React from 'react';
import FormInput from '../FormInput/index';
import CustomButton from '../CustomButton/index';

import {auth,createUserProfileDOcument} from '../../firebase/firebaseUtils';

import './signUp.scss';

import {SignUpContainer,SignUpTitle} from './sign-up.styles';

class SignUp extends React.Component {
    
    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDOcument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        } catch (error) {
            console.error(error);
        }
    } 

    handleChange = (e) => {
        const {name,value} = e.target;

        this.setState({[name]:value});
    }
    render(){

        const {displayName,email,password,confirmPassword} = this.state;

        return (
            <SignUpContainer>
                <SignUpTitle className="title">I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" 
                                name="displayName"
                                value={displayName}
                                onChange={this.handleChange}
                                label="Display Name"
                                required
                    />

                    <FormInput type="email" 
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                label="Email"
                                required
                    />


                    <FormInput type="password" 
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                label="Password"
                                required
                    />

                    <FormInput type="password" 
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.handleChange}
                                label="Confirm Password"
                                required
                    />
                    <CustomButton type='submit' >
                        SIGN UP
                    </CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp
