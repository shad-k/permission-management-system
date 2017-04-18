import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

import './dashboard.html';

import './messageBoard.js';

import './adminPanel.js';

import './userPanel.js';

Template.dashboard.events ({
	'click .logout'(event) {
		Meteor.logout();
	}
});