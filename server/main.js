import {Meteor} from 'meteor/meteor';
import {Users} from './../imports/api/MongoDB.js';

Meteor.startup(()=>{
    Users.remove({});
    Users.insert({
        name: 'Mum1',
        userName: 'user1',
        email: 'mum@test.com',
        babies: [{babyName:"baby1"}]
    });
});
