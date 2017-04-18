import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

import './login.html';

Template.login.events ({
	'submit .login' (event) {
		event.preventDefault();

		var username = event.target.username.value;

		var password = event.target.password.value;

		Meteor.loginWithPassword({"username": username}, password, failedLogin);
	}
});

function failedLogin(e) {
	if(e)
		alert("Login Failed " + e);
}