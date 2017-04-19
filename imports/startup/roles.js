// This file contains the startup code. If the root user hasn't been established as an admin
// this file does the same.
import { Roles } from 'meteor/alanning:roles';

import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'setInitialRole'() {
		if(Meteor.isServer) {
			if(!Meteor.roles) {
				console.log("Setup admin");
				Roles.addUsersToRoles([this.userId], 'admin', Roles.GLOBAL_GROUP);
			}
		}
	}
});