import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/index'
import HatsPage from './pages/HatsPage/index';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/hats" component={HatsPage}/> 
      </Switch>
    </div>
  );
}

export default App;
