import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class Registration extends Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(e.target.firstName.value);
    }
    render(){
    return(
      <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName"/>
            <button>Submit</button>
      </form>
    )
  }
}

export default Registration;
