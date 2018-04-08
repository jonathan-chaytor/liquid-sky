import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import NavButton from './buttons/NavButton';
import Home from './pages/Home';
import Info from './pages/Info';
import Feed from './pages/Feed';

class Header extends Component{
  render(){
    return(
        <header>
          <nav key="navLeftTop" className="navbar navbar-light bg-light">
            <div className='row col-sm-12'>
            <div key="logo" className="col-md-5">
              <ul>
                <li>
                  <Link to='/'><NavButton key="home" thisImage="../src/images/beers.png" thisClass="nav-button"/></Link>
                </li>
                <li className="inline">
                  <Link to='./Info'>
                    <NavButton key="info" thisImage="../src/images/ia/sun-HJ0YzR6yM.png" thisClass="nav-button"/><span id="days">Day {5}</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div key="name" id="babyname" className="col-md-3">
              <Link to='./Info'> My Baby <b>{this.props.babyName}</b></Link>
            </div>

            <div key="baby" className="col-md-4">
              <ul>
              <li>
                <Link to='./Feed'>
                  <NavButton key="nav3" thisImage="../src/images/ia/icons8-babys-room-100.png" thisClass="nav-button"/>
                </Link>
              </li>
              <li>
                <Link to='./Feed'>
                <NavButton key="nav3" thisImage="../src/images/ia/Switch.png" thisClass="nav-button"/>
                </Link>
              </li>
            </ul>
              <span className="header-info"> Logged in as <b>{this.props.user}</b></span>
          </div>
          </div>
          </nav>
        </header>
    )
  }
}

export default Header;
