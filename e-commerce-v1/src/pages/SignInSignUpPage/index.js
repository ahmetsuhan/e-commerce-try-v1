import React from 'react'
import './signInSignUpPage.scss';
import SignIn from '../../components/SignIn/index';
import SignUp from '../../components/SignUp/index';

import {SignInAndSignUpContainer} from './signInSignUp.styles';

const SignInAndSignUpPage = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp/>
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage
