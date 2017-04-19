// This file contains code handling the messages collection

import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');


Meteor.methods({
	'messages.insert'(text) {
		// This method is used to insert new messages into the collection
		check(text, String);

		// Make sure the user is logged in before inserting a message
	    if (! Meteor.userId()) {
	      throw new Meteor.Error('not-authorized');
	    }

	    Messages.insert({
	    	text,
	    	createdAt: new Date(),
	    	owner: Meteor.userId(),
	    	username: Meteor.user().username,
	    });
	},
	'messages.remove' (id) {
		// This method removes a message that the admin wishes to delete
		check(id, String);
		if(Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)) {
			Messages.remove(id);
		}
	}
});