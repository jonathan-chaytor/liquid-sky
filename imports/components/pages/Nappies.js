import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class Nappies extends Component{
  render(){
    return(
      <div id="home" className="container-fluid">
        <h1>
        <Link to='/'><span class="oi oi-chevron-left"></span></Link> Nappies for my baby.
        </h1>
      </div>
    )
  }
}

export default Nappies;
