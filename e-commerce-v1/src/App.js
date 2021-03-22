import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/index'
import ShopPage from './pages/ShopPage/index.js';
import Header from './components/Header/index';
import SignInSignUpPage from './pages/SignInSignUpPage/index';
import {auth,createUserProfileDOcument} from './firebase/firebaseUtils';
import React from 'react';

class App extends React.Component {
  state={
    currentUser:null
  }

   unsubscribeFromAuth = null;
  
   componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
        if(userAuth){
          const userRef = await createUserProfileDOcument(userAuth);

          userRef.onSnapshot(snapshot=> {
            console.log({snapshot});this.setState({
              currentUser:{
                id:snapshot.id,
                ...snapshot.data()
              }
            });
          });
        }else{
          this.setState({currentUser:userAuth});
        }
    })
     
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }
   render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/shop" component={ShopPage}/> 
          <Route path="/sign-in" exact component={SignInSignUpPage}/>
        </Switch>
      </div>
    );
   }
 
}

export default App;
