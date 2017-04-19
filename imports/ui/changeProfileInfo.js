import './changeProfileInfo.html';

import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

// import { Roles } from 'meteor/alanning:roles';


Template.changeProfileInfo.helpers({
	profile() {
		return Meteor.users.find({_id: this._id});
	}
});
