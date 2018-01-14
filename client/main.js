import { React } from 'react';
import { ReactDOM } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { console } from 'meteor/tools';

Meteor.startup(() => {
  let jsx = <p>Text from main.js</p>;
  ReactDOM.render(jsx,document.getElementById('intro'));
});
