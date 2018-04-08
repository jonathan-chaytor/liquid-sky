import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class NavButton extends Component{
  renderImgIcon(){
    if(this.props.thisImage.length>0)
    //is an image
      return <img src={this.props.thisImage} className={this.props.thisClass}/>;
    else
    //is an icon
      return  <span className={this.props.thisClass}></span>;
  }
  render(){
    return(
      <div className="navBtnDiv">
        {this.renderImgIcon()}
      </div>
    )
  }
}

export default NavButton;
