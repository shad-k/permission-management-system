import { Template } from 'meteor/templating';

import { Messages } from '../api/messages.js';

import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

import './login.js';

import './dashboard.js';

import './body.html';


Template.body.onCreated (function bodyOnCreated() {
});