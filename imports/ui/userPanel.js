// This code handles the user panel logic. Provides event handlers to change the profile information
import './userPanel.html';

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

Template.userPanel.events({
	'click .showProfile' (event) {
		var user = Meteor.users.findOne({_id: Meteor.userId()});
		document.querySelector('.ownProfileInfo').style.display = "block";

		document.querySelector(".ownUsername").value = user.username;


		if(user.profile.name)
			document.querySelector(".ownName").value = user.profile.name;
		else
			document.querySelector(".ownName").value = "no value set";
		if(user.profile.email)
			document.querySelector(".ownEmail").value = user.profile.email;
		else
			document.querySelector(".ownEmail").value = "no value set";
		if(user.profile.phone)
			document.querySelector(".ownPhone").value = user.profile.phone;
		else
			document.querySelector(".ownPhone").value = "no value set";
	},
	'click .changeInfo' (event) {
		var name = document.querySelector(".ownName").value;
		var email = document.querySelector(".ownEmail").value;
		var phone = document.querySelector(".ownPhone").value;

		var username = document.querySelector(".ownUsername").value;

		Meteor.call('user.updateUser', username, name, email, phone, function(error, result) {
			if(error) {
				alert(error);
			}
			else {
				alert("User profile updated");
			}
		});
		document.querySelector('.ownProfileInfo').style.display = "none";
	}
});