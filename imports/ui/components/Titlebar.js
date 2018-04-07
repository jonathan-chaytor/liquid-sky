import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../components/Icon';

export default class Titlebar extends React.Component {
  constructor(props) {
		super(props);
	}
  //renders the detail  sections if required
  showDetail() {
    console.log("got here");
    if(this.props.showDetail) {
      return(
        <div className="titlebar">
          <Icon file="/images/sun-HJ0YzR6yM.png" width={50} height={30} label="5" labelRight={true} linkTo=""/>
          <Icon file="/images/userEdit.PNG" width={50} height={30} label="" labelRight={true} linkTo="/user"/>
          <Icon file="/images/Switch.png" width={50} height={50} label="" labelRight={false} linkTo="/babylist"/>
          <Icon file="/images/princess-rJQBTa61G (1).png" width={50} height={50} label="Suzy" labelRight={false} linkTo="/baby"/>
        </div>
      );
    }else {
      return(
        <p>not showDetail</p>
      );
    }

  }
  //renders the component
	render() {
		//this is where jsx goes

		return (
      <div>
        <h1>{this.props.title}</h1>
        {this.showDetail()}
      </div>
		);
	}
}

Titlebar.propTypes = {
  title: PropTypes.string.isRequired, //contains title
  showDetail: PropTypes.bool.isRequired //determins if all the icons  in the title are shown
}
