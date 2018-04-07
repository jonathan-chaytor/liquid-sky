import React from 'react';
import Titlebar from './components/Titlebar'

export default class Hub extends React.Component {
	render() {
		//this is where jsx goes
		return (
      <div>
        <h1>Hub page</h1>
				<Titlebar title="My Baby Home" showDetail={true} />
      </div>
		);
	}
}
