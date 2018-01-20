import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavButton from './buttons/NavButton';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import Info from './pages/Info';
import Feed from './pages/Feed';

class Header extends Component{
  render(){
    return(
        <header>
          <nav key="navLeftTop" className="navbar navbar-light bg-light">
            <div key="logo" className="navbar-brand mb-0 h1"> My Baby {this.props.babyName}
            <ul>
              <li>
                <Link to='/'><NavButton key="nav1" thisImage="../src/images/beers.png" thisClass="nav-button"/></Link>
              </li>
              <li>
               <Link to='./Info'>
               <NavButton key="nav2" thisImage="../src/images/charity.png" thisClass="nav-button"/> <span> Logged in as {this.props.user}</span>
             </Link>
           </li>
         </ul>
           </div>
           <ul>
           <li>
             <Link to='./Feed'>
             <NavButton key="nav3" thisImage="../src/images/smile.png" thisClass="nav-button"/>
           </Link>
         </li>
         <li>
           <Link to='./Feed'>
           <NavButton key="nav3" thisImage="../src/images/smile.png" thisClass="nav-button"/>
         </Link>
       </li>
            </ul>
          </nav>
        </header>
    )
  }
}

export default Header;
