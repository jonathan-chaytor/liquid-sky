import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class Nappies extends Component{
  render(){
    return(
      <div id="home" className="container-fluid">
        <h1>
          Nappies for my baby.
        </h1>
        <span class="oi oi-account-login"></span>
      </div>
    )
  }
}

export default Nappies;
