import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';

import {Meteor} from 'meteor/meteor';

Meteor.startup(()=>{
  ReactDOM.render(
  <App/>, document.getElementById('app')
  );
});
