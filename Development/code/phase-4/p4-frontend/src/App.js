import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import BrowserRouter from 'react-router-dom/BrowserRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route path = '/login'>
            <Login />
          </Route>
          <Route path = '/register'>
            <Register />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
