import { Accounts } from 'meteor/accounts-base';

import { Roles } from 'meteor/alanning:roles';

import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'accounts.addUser' (username, password) {
		var id = Accounts.createUser({username: username, password: password});
		Meteor.users.update({_id: id}, {$set: {profile: {name: "", email: "", phone: ""}}});
		return id;
	},
	'roles.setRole'(id, permission) {
		console.log(id);
		Roles.addUsersToRoles([id], permission, Roles.GLOBAL_GROUP);
	},
	'roles.blockUser' (id) {
		Roles.addUsersToRoles([id], 'block', 'postMessage');
	},
	'roles.unblockUser' (id) {
		Roles.removeUsersFromRoles([id], 'block', 'postMessage');
	},
	'user.removeUser' (id) {
		Meteor.users.remove({_id: id});
	},
	'user.updateUser' (username, name, email, phone) {
		if(username === "root") {
			return "Admin details can't be changed.";
		}
		Meteor.users.update({"username": username}, {$set: { "profile": {"name": name, "email": email, "phone": phone}}});
		return true;
	}
});