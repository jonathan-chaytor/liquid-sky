import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';
import {Tracker} from 'meteor/tracker';
import {Users} from './../imports/api/MongoDB.js';

import {Meteor} from 'meteor/meteor';

Meteor.startup(()=>{
  Tracker.autorun(()=>{
    let user = Users.find({'email':'mum@test.com'}).fetch()
    ReactDOM.render(
      <App user={user}/>, document.getElementById('app')
      );
  })
});
