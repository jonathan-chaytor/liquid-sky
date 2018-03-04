import React, {Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import Feed from './pages/Feed';
import Nappies from './pages/Nappies';

class App extends Component{
  render(){
    let userName = this.props.user[0];
    console.log(userName);
    return(
      <Router>
        <div className="container-fluid">
          <Header babyName={babyName} user="mum"/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Info" component={Info}/>
            <Route exact path="/Feed" component={Feed}/>
            <Route exact path="/Nappies" component={Nappies}/>
          <Footer/>
        </div>
      </Router>
    ) 
  }
}

export let babyName = "Buster";

export default App;
