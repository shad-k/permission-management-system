// This file contains code that constructs the common dashboard and integrates
// user dependent templates
import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

import './dashboard.html';

import './messageBoard.js';

import './adminPanel.js';

import './userPanel.js';

import './managerPanel.js';

Template.dashboard.events ({
	'click .logout'(event) {
		Meteor.logout();
	}
});