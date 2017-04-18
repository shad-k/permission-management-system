import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');


Meteor.methods({
	'messages.insert'(text) {
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
		check(id, String);
		// console.log(Meteor.userId());
		// Roles.addUsersToRoles([Meteor.userId()],'admin', Roles.GLOBAL_GROUP);
		// console.log(Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP));
		if(Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)) {
			Messages.remove(id);
		}
	}
});