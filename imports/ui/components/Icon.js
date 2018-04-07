import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

export default class Icon extends React.Component {
  //renders the extra link sections if required

  iconClick(){
    if(this.props.linkTo != ""){
      browserHistory.push(this.props.linkTo);
    }
  }

  //renders the component
	render() {
		//this is where jsx goes
    let styleString = "width:" + this.props.width + "px;height:" + this.props.height + "px";
		return (
      <div className="icon" onClick={this.iconClick.bind(this)}>
        <img src={this.props.file} style={{width: this.props.width + 'px',height: this.props.height + 'px'}}/>
        {this.props.labelRight ? this.props.label : <p>{this.props.label}</p>}
      </div>
		);
	}
}

Icon.propTypes = {
  file: PropTypes.string.isRequired, //locatoin of the image file
  height: PropTypes.number.isRequired, //height
  width: PropTypes.number.isRequired, //width
  label: PropTypes.string, //contains title
  labelRight: PropTypes.bool,  //determins if all the links in the title are shown
  linkTo: PropTypes.string //the url to link to on click
}

Icon.defaultProps = {
  labelOnRight: false
}
