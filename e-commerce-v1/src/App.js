import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/index'
import ShopPage from './pages/ShopPage/index.js';
import Header from './components/Header/index';
function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/shop" component={ShopPage}/> 
      </Switch>
    </div>
  );
}

export default App;
