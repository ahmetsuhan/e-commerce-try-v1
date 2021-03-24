import React from 'react'
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebaseUtils';
import CartIcon from '../CartIcon/index';
import CartDropdown from '../CartDropdown/index';
import {selectCartHidden} from '../../redux/Cart/cartSelector';
import {selectCurrentUser} from '../../redux/User/userSelector';



const Header = ({currentUser,hidden}) => {
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
                <CartIcon />
            </div>
            {
                hidden ?(null) :(<CartDropdown/>)
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})


export default connect(mapStateToProps)(Header);
