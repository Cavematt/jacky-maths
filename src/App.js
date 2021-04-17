import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Components/Home'
import AboutMe from './Components/About'
import Prices from './Components/Prices'
import Contact from './Components/Contact'


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About" exact>
            <AboutMe />
          </Route>
          <Route path="/Prices" exact>
            <Prices />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;