import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/format/Layout';
import { NavBar } from './components/format/NavBar';




export class App extends Component {

  
  render(){  
    return (
     <React.Fragment>
       <NavBar />
       <Layout>
        <Router>
          <Switch>
            <Route exact path= "/" component= {Home}  />
            <Route className="pages" path= "/about" component= {About} />
            <Route className="pages" path= "/portfolio" component= {Portfolio} />
            <Route className="pages" path= "/contact" component= {Contact} />
            <Route component= {NoMatch} />
          </Switch>
        </Router>
       </Layout>
     </React.Fragment>
    );

   
  }
}

export default App;

