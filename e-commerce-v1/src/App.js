import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/index'
import ShopPage from './pages/ShopPage/index.js';
import Header from './components/Header/index';
import SignInSignUpPage from './pages/SignInSignUpPage/index';
import {auth,createUserProfileDOcument} from './firebase/firebaseUtils';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/User/userAction';
import {selectCurrentUser} from './redux/User/userSelector';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {
  

   unsubscribeFromAuth = null;
  
   componentDidMount(){

    const {setCurrentUser} = this.props;

     this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
        if(userAuth){
          const userRef = await createUserProfileDOcument(userAuth);

          userRef.onSnapshot(snapshot=> {
            setCurrentUser({
                id:snapshot.id,
                ...snapshot.data()
            });
          });
        }else{
          setCurrentUser(userAuth);
        }
    })
     
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }
   render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/shop" component={ShopPage}/> 
          <Route 
                  path="/sign-in"  
                  render={ ()=> this.props.currentUser? 
                    (<Redirect to={{
                      pathname:"/"
                    }}/>) : 
                    (<SignInSignUpPage/>) }
          />
        </Switch>
      </div>
    );
   }
}

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

