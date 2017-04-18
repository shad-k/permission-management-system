import './allUsers.html';

import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

Template.allUsers.helpers({
  users() {
    return Meteor.users.find({});
  },
});