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


class App extends Component{
  render(){
    return(
      <Router>
        <div className="container-fluid">
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Info" component={Info}/>
            <Route exact path="/Feed" component={Feed}/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
