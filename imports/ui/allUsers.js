// This file contains the code for displaying the user list and handling all the operations
// concerning the users collection

import './allUsers.html';

import './changeProfileInfo.js';

import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { Roles } from 'meteor/alanning:roles';

Template.allUsers.helpers({
  users() {
    return Meteor.users.find({_id: {$ne : Meteor.userId()}});
  }
});


Template.allUsers.events ({
	'click .blockUser' (event) {
		Meteor.call('roles.blockUser', this._id);
	},
	'click .unblockUser' (event) {
		Meteor.call('roles.unblockUser', this._id);
	},
	'click .changeProfileInfo' (event) {
		document.querySelector(".changeProfileDiv").style.display = "block";
		var user = Meteor.users.findOne({_id: this._id});
		document.querySelector(".un").value = user.username;
		if(user.username === "root") {
			// If user is root its profile will not be set or changed
			document.querySelector(".name").value = "admin details can't be shown";
			document.querySelector(".email").value = "admin details can't be shown";
			document.querySelector(".phone").value = "admin details can't be shown";
		}
		else {
			if(user.profile.name)
				document.querySelector(".name").value = user.profile.name;
			else
				document.querySelector(".name").value = "no value set";
			if(user.profile.email)
				document.querySelector(".email").value = user.profile.email;
			else
				document.querySelector(".email").value = "no value set";
			if(user.profile.phone)
				document.querySelector(".phone").value = user.profile.phone;
			else
				document.querySelector(".phone").value = "no value set";
		}
	},
	'click .removeUser' (event) {
		Meteor.call('user.removeUser', this._id);
	},
	'click .updateUser' (event) {
		var name = document.querySelector(".name").value;
		var email = document.querySelector(".email").value;
		var phone = document.querySelector(".phone").value;

		// Take the username from the DOM since the user id of the selected user isn't passed
		var username = document.querySelector(".un").value;

		Meteor.call('user.updateUser', username, name, email, phone, function(error, result) {
			if(error) {
				alert(error);
			}
			else if(result === true) {
				alert("User profile updated");
			}
			else {
				alert(result);
			}
		});
	}
});