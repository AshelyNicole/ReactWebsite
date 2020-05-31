import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';


export class App extends Component {
  state = {
    visible: true
  }
  
  
  render(){
    let jumbo = this.state.visible ? (
      <Jumbotron />
    ) : ( null)

    if (!this.state.visible) {
      jumbo = null;
    }
    
    let landingPage = <Route exact path= "/" component= {Home}  />

    

      
    
      
    return (
     <React.Fragment>
       <NavBar />
       {jumbo} 
       <Layout>
        <Router>
          <Switch>
            {landingPage}
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

