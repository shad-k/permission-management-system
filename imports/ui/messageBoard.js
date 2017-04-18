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