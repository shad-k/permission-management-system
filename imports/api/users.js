import { Accounts } from 'meteor/accounts-base';

import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
	'accounts.addUser' (username, password) {
		var id = Accounts.createUser({username: username, password: password});
		console.log(id);
		return id;
	},
	'roles.setRole'(id, permission) {
		console.log(id);
		Roles.addUsersToRoles([id], permission, Roles.GLOBAL_GROUP);
	}
})