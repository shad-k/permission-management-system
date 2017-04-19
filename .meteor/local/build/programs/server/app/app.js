var require = meteorInstall({"imports":{"api":{"messages.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/messages.js                                                           //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
module.export({                                                                      // 1
	Messages: function () {                                                             // 1
		return Messages;                                                                   // 1
	}                                                                                   // 1
});                                                                                  // 1
var Meteor = void 0;                                                                 // 1
module.importSync("meteor/meteor", {                                                 // 1
	Meteor: function (v) {                                                              // 1
		Meteor = v;                                                                        // 1
	}                                                                                   // 1
}, 0);                                                                               // 1
var Mongo = void 0;                                                                  // 1
module.importSync("meteor/mongo", {                                                  // 1
	Mongo: function (v) {                                                               // 1
		Mongo = v;                                                                         // 1
	}                                                                                   // 1
}, 1);                                                                               // 1
var check = void 0;                                                                  // 1
module.importSync("meteor/check", {                                                  // 1
	check: function (v) {                                                               // 1
		check = v;                                                                         // 1
	}                                                                                   // 1
}, 2);                                                                               // 1
var Messages = new Mongo.Collection('messages');                                     // 9
Meteor.methods({                                                                     // 12
	'messages.insert': function (text) {                                                // 13
		// This method is used to insert new messages into the collection                  // 14
		check(text, String); // Make sure the user is logged in before inserting a message
                                                                                     //
		if (!Meteor.userId()) {                                                            // 18
			throw new Meteor.Error('not-authorized');                                         // 19
		}                                                                                  // 20
                                                                                     //
		Messages.insert({                                                                  // 22
			text: text,                                                                       // 23
			createdAt: new Date(),                                                            // 24
			owner: Meteor.userId(),                                                           // 25
			username: Meteor.user().username                                                  // 26
		});                                                                                // 22
	},                                                                                  // 28
	'messages.remove': function (id) {                                                  // 29
		// This method removes a message that the admin wishes to delete                   // 30
		check(id, String);                                                                 // 31
                                                                                     //
		if (Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)) {            // 32
			Messages.remove(id);                                                              // 33
		}                                                                                  // 34
	}                                                                                   // 35
});                                                                                  // 12
///////////////////////////////////////////////////////////////////////////////////////

}],"users.js":["meteor/accounts-base","meteor/alanning:roles","meteor/meteor",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/users.js                                                              //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var Accounts = void 0;                                                               // 1
module.importSync("meteor/accounts-base", {                                          // 1
	Accounts: function (v) {                                                            // 1
		Accounts = v;                                                                      // 1
	}                                                                                   // 1
}, 0);                                                                               // 1
var Roles = void 0;                                                                  // 1
module.importSync("meteor/alanning:roles", {                                         // 1
	Roles: function (v) {                                                               // 1
		Roles = v;                                                                         // 1
	}                                                                                   // 1
}, 1);                                                                               // 1
var Meteor = void 0;                                                                 // 1
module.importSync("meteor/meteor", {                                                 // 1
	Meteor: function (v) {                                                              // 1
		Meteor = v;                                                                        // 1
	}                                                                                   // 1
}, 2);                                                                               // 1
Meteor.methods({                                                                     // 9
	'accounts.addUser': function (username, password) {                                 // 10
		// This method allows the admin to create new users                                // 11
		var id = Accounts.createUser({                                                     // 12
			username: username,                                                               // 12
			password: password                                                                // 12
		}); // It also populates the profile object for the newly created users            // 12
                                                                                     //
		Meteor.users.update({                                                              // 15
			_id: id                                                                           // 15
		}, {                                                                               // 15
			$set: {                                                                           // 15
				profile: {                                                                       // 15
					name: "",                                                                       // 15
					email: "",                                                                      // 15
					phone: ""                                                                       // 15
				}                                                                                // 15
			}                                                                                 // 15
		}); // and returns the id of the newly created user                                // 15
                                                                                     //
		return id;                                                                         // 18
	},                                                                                  // 19
	'roles.setRole': function (id, permission) {                                        // 20
		// Sets the roles for the newly created users                                      // 21
		Roles.addUsersToRoles([id], permission, Roles.GLOBAL_GROUP);                       // 22
	},                                                                                  // 23
	'roles.blockUser': function (id) {                                                  // 24
		// Allows the manager and admin to block a user from posting a message             // 25
		Roles.addUsersToRoles([id], 'block', 'postMessage');                               // 26
	},                                                                                  // 27
	'roles.unblockUser': function (id) {                                                // 28
		// Allows the manager and admin to unblock a user                                  // 29
		Roles.removeUsersFromRoles([id], 'block', 'postMessage');                          // 30
	},                                                                                  // 31
	'user.removeUser': function (id) {                                                  // 32
		// This method removes the user whose userId has been passed as argument           // 33
		Meteor.users.remove({                                                              // 34
			_id: id                                                                           // 34
		});                                                                                // 34
	},                                                                                  // 35
	'user.updateUser': function (username, name, email, phone) {                        // 36
		// This method updates the profile object of a user.                               // 37
		// This operation can be called by only the admin and managers                     // 38
		if (username === "root") {                                                         // 39
			// Check if the user is root. If yes then don't update profile                    // 40
			return "Admin details can't be changed.";                                         // 41
		}                                                                                  // 42
                                                                                     //
		Meteor.users.update({                                                              // 43
			"username": username                                                              // 43
		}, {                                                                               // 43
			$set: {                                                                           // 43
				"profile": {                                                                     // 43
					"name": name,                                                                   // 43
					"email": email,                                                                 // 43
					"phone": phone                                                                  // 43
				}                                                                                // 43
			}                                                                                 // 43
		});                                                                                // 43
		return true;                                                                       // 44
	}                                                                                   // 45
});                                                                                  // 9
///////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"roles.js":["meteor/alanning:roles","meteor/meteor",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/startup/roles.js                                                          //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var Roles = void 0;                                                                  // 1
module.importSync("meteor/alanning:roles", {                                         // 1
	Roles: function (v) {                                                               // 1
		Roles = v;                                                                         // 1
	}                                                                                   // 1
}, 0);                                                                               // 1
var Meteor = void 0;                                                                 // 1
module.importSync("meteor/meteor", {                                                 // 1
	Meteor: function (v) {                                                              // 1
		Meteor = v;                                                                        // 1
	}                                                                                   // 1
}, 1);                                                                               // 1
Meteor.methods({                                                                     // 5
	'setInitialRole': function () {                                                     // 6
		if (Meteor.isServer) {                                                             // 7
			if (!Meteor.roles) {                                                              // 8
				console.log("Setup admin");                                                      // 9
				Roles.addUsersToRoles([this.userId], 'admin', Roles.GLOBAL_GROUP);               // 10
			}                                                                                 // 11
		}                                                                                  // 12
	}                                                                                   // 13
});                                                                                  // 5
///////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["../imports/startup/roles.js","../imports/api/messages.js","../imports/api/users.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// server/main.js                                                                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
module.importSync("../imports/startup/roles.js");                                    // 1
module.importSync("../imports/api/messages.js");                                     // 1
module.importSync("../imports/api/users.js");                                        // 1
///////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
