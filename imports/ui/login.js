import { Template } from 'meteor/templating';

import './login.html';

Template.login.events ({
	'submit .login' (event) {
		event.preventDefault();

		var username = event.target.username.value;

		var password = event.target.password.value;

		Meteor.loginWithPassword(username, password);
	}
})