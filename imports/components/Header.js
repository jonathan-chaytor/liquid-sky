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
          <nav>
            <ul>
              <li>
                <Link to='/'><NavButton key="nav1" thisImage="../src/images/beers.png" thisClass="nav-button"/></Link>
              </li>
              <li>
               <Link to='./Info'>
               <NavButton key="nav2" thisImage="../src/images/charity.png" thisClass="nav-button"/>
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
