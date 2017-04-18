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