import React from 'react'
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebaseUtils';

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contact</Link>
                {
                    currentUser?(<div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>):
                    (<Link className="option" to="/sign-in" >
                        SIGN IN
                    </Link>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser:state.user.currenUser
    }
}

export default connect(mapStateToProps)(Header);
