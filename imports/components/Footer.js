import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import NavButton from './buttons/NavButton';

class Footer extends Component{
  render(){
    return(
        <footer>
          <nav>
            <div id="home" className="nav justify-content-center">
              <ul>
                <li>
                 <Link to='./Feed'>
                 <NavButton key="nav3" thisImage="../src/images/ia/icons8-statistics-100.png" thisClass="footer-button"/>
                </Link>
                </li>
                <li>
                 <Link to='./Nappies'>
                 <NavButton key="nav2" thisImage="../src/images/ia/icons8-spiral-bound-booklet-100.png" thisClass="footer-button"/>
               </Link>
              </li>
              <li>
                <Link to='/'><NavButton key="nav1" thisImage="../src/images/ia/invite family.png" thisClass="footer-button"/></Link>
              </li>
              <li>
                <Link to='/'><NavButton key="nav1" thisImage="../src/images/ia/register.png" thisClass="footer-button"/></Link>
              </li>
              </ul>
            </div>
          </nav>
        </footer>
    )
  }
}

export default Footer;
