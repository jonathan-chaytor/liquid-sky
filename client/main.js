import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

//importing all the page components
import Baby from '../imports/ui/Baby';
import BabyFeed from '../imports/ui/BabyFeed';
import BabyGrowth from '../imports/ui/BabyGrowth';
import BabyList from '../imports/ui/BabyList';
import BabyNappy from '../imports/ui/BabyNappy';
import BabyProgress from '../imports/ui/BabyProgress';
import Diary from '../imports/ui/Diary';
import DiaryEvent from '../imports/ui/DiaryEvent';
import FamilyMember from '../imports/ui/FamilyMember';
import FamilyMemberList from '../imports/ui/FamilyMemberList';
import Hub from '../imports/ui/Hub';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';
import Register from '../imports/ui/Register';
import User from '../imports/ui/User';

//define all available routes
const routes = (
  <Router history={browserHistory}>
    {/*default page (login)*/}
    <Route path="/" component={Login}/>
    {/*All other available page components*/}
    <Route path="/baby" component={Baby}/>
    <Route path="/babyfeed" component={BabyFeed}/>
    <Route path="/babygrowth" component={BabyGrowth}/>
    <Route path="/babylist" component={BabyList}/>
    <Route path="/babynappy" component={BabyNappy}/>
    <Route path="/babyprogress" component={BabyProgress}/>
    <Route path="/diary" component={Diary}/>
    <Route path="/diaryevent" component={DiaryEvent}/>
    <Route path="/familymember" component={FamilyMember}/>
    <Route path="/familymemberlist" component={FamilyMemberList}/>
    <Route path="/hub" component={Hub}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/user" component={User}/>
    {/*not found 404 page*/}
    <Route path="*" component={NotFound}/>
  </Router>
);

//to render the routes
Meteor.startup(() => {
	ReactDom.render(routes, document.getElementById('app'));
});
