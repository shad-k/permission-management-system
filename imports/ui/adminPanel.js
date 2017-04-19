// This file contains the logic code for the admin panel


import './adminPanel.html';

import './allUsers.js';

import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';


Template.adminPanel.events({
	'submit .createUser' (event) {
		event.preventDefault();

		var permission = event.target.permission.value;

		var username = event.target.username.value;

		var password = event.target.password.value;

		if(username && password) {
			Meteor.call('accounts.addUser', username, password, (error, result) => {Meteor.call('roles.setRole',result, permission)});
		}


		event.target.username.value = "";
		event.target.password.value = "";
	}
});