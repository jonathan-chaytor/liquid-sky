import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class NavButton extends Component{
  render(){
    return(
      <div className="container-fluid">
        <img src={this.props.thisImage} className={this.props.thisClass}/>
      </div>
    )
  }
}

export default NavButton;
