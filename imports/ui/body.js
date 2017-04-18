import { Template } from 'meteor/templating';

import { Roles } from '../api/roles.js';

import { Messages } from '../api/messages.js';

import { Meteor } from 'meteor/meteor';

import './login.js';

import './body.html';


console.log(Meteor.user());