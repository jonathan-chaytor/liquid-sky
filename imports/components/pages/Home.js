import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import NavButton from '../buttons/NavButton';
import Info from '../pages/Info';
import Feed from '../pages/Feed';
import Nappies from '../pages/Nappies';

class Home extends Component{
  render(){
    return(
      <div id="home" className="nav justify-content-center">
        <ul>
          <li>
           <Link to='./Feed'>
           <NavButton key="nav3" thisImage="../src/images/ia/bottle feed.png" thisClass="main-button"/>
          </Link>
          </li>
          <li>
           <Link to='./Nappies'>
           <NavButton key="nav2" thisImage="../src/images/ia/icons8-nappy-100.png" thisClass="main-button"/>
         </Link>
        </li>
        <li>
          <Link to='/'><NavButton key="nav1" thisImage="../src/images/ia/icons8-weight-100.png" thisClass="main-button"/></Link>
        </li>

        </ul>
      </div>
    )
  }
}

export default Home;
