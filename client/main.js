import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';
import {Tracker} from 'meteor/tracker';
import {Users} from './../imports/api/MongoDB.js';

import {Meteor} from 'meteor/meteor';

const getUser = function(user) {
  return <App user={user}/>;
}

//Comment from Kiarash

Meteor.startup(()=>{
  Tracker.autorun(()=>{
    user = Users.find({userName: 'user1'}).fetch();
    let jsx = getUser(user);
    ReactDOM.render(
      jsx, document.getElementById('app')
      );
  })
});
