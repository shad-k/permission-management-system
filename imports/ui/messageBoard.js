// This file contains code that handles the message board template.
// This registers and fires events that occur on the message board
import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { Messages } from '../api/messages.js';

import './messageBoard.html';


Template.messageBoard.helpers({
  messages() {
    return Messages.find({});
  },
});


Template.messageBoard.events({
	'submit .inputArea' (event) {
		event.preventDefault();
		var message = event.target.message.value;

		if(message !== "")
			Meteor.call('messages.insert', message);

		event.target.message.value = "";
	},
	'click .deleteMessage' (event) {
		event.preventDefault();

		Meteor.call('messages.remove', this._id);
	}
});