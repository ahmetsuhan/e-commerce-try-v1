import React from 'react'
import './signInSignUpPage.scss';
import SignIn from '../../components/SignIn/index';
import SignUp from '../../components/SignUp/index';
const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage
