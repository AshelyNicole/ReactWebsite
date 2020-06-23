import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';




export class App extends Component {
  render(){  
    return (
     <React.Fragment>
        <Router>
          <Switch>
            <Route exact path= "/" component= {Home}  />
            <Route  path= "/about" component= {About} />
            <Route path= "/portfolio" component= {Portfolio} />
            <Route path= "/contact" component= {Contact} />
          </Switch>
        </Router>
     </React.Fragment>
    );
  }
}

export default App;

