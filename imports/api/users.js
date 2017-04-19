// This files contains Meteor methods for handling the default user collection in Meteor

import { Accounts } from 'meteor/accounts-base';

import { Roles } from 'meteor/alanning:roles';

import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'accounts.addUser' (username, password) {
		// This method allows the admin to create new users
		var id = Accounts.createUser({username: username, password: password});

		// It also populates the profile object for the newly created users
		Meteor.users.update({_id: id}, {$set: {profile: {name: "", email: "", phone: ""}}});

		// and returns the id of the newly created user
		return id;
	},
	'roles.setRole'(id, permission) {
		// Sets the roles for the newly created users
		Roles.addUsersToRoles([id], permission, Roles.GLOBAL_GROUP);
	},
	'roles.blockUser' (id) {
		// Allows the manager and admin to block a user from posting a message
		Roles.addUsersToRoles([id], 'block', 'postMessage');
	},
	'roles.unblockUser' (id) {
		// Allows the manager and admin to unblock a user
		Roles.removeUsersFromRoles([id], 'block', 'postMessage');
	},
	'user.removeUser' (id) {
		// This method removes the user whose userId has been passed as argument
		Meteor.users.remove({_id: id});
	},
	'user.updateUser' (username, name, email, phone) {
		// This method updates the profile object of a user.
		// This operation can be called by only the admin and managers
		if(username === "root") {
			// Check if the user is root. If yes then don't update profile
			return "Admin details can't be changed.";
		}
		Meteor.users.update({"username": username}, {$set: { "profile": {"name": name, "email": email, "phone": phone}}});
		return true;
	}
});