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
var Messages = new Mongo.Collection('messages');                                     // 7
Meteor.methods({                                                                     // 10
	'messages.insert': function (text) {                                                // 11
		check(text, String); // Make sure the user is logged in before inserting a message
                                                                                     //
		if (!Meteor.userId()) {                                                            // 15
			throw new Meteor.Error('not-authorized');                                         // 16
		}                                                                                  // 17
                                                                                     //
		Messages.insert({                                                                  // 19
			text: text,                                                                       // 20
			createdAt: new Date(),                                                            // 21
			owner: Meteor.userId(),                                                           // 22
			username: Meteor.user().username                                                  // 23
		});                                                                                // 19
	},                                                                                  // 25
	'messages.remove': function (id) {                                                  // 26
		check(id, String); // console.log(Meteor.userId());                                // 27
		// Roles.addUsersToRoles([Meteor.userId()],'admin', Roles.GLOBAL_GROUP);           // 29
		// console.log(Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP));  // 30
                                                                                     //
		if (Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)) {            // 31
			Messages.remove(id);                                                              // 32
		}                                                                                  // 33
	}                                                                                   // 34
});                                                                                  // 10
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
Meteor.methods({                                                                     // 7
	'accounts.addUser': function (username, password) {                                 // 8
		var id = Accounts.createUser({                                                     // 9
			username: username,                                                               // 9
			password: password                                                                // 9
		});                                                                                // 9
		Meteor.users.update({                                                              // 10
			_id: id                                                                           // 10
		}, {                                                                               // 10
			$set: {                                                                           // 10
				profile: {                                                                       // 10
					name: "",                                                                       // 10
					email: "",                                                                      // 10
					phone: ""                                                                       // 10
				}                                                                                // 10
			}                                                                                 // 10
		});                                                                                // 10
		return id;                                                                         // 11
	},                                                                                  // 12
	'roles.setRole': function (id, permission) {                                        // 13
		console.log(id);                                                                   // 14
		Roles.addUsersToRoles([id], permission, Roles.GLOBAL_GROUP);                       // 15
	},                                                                                  // 16
	'roles.blockUser': function (id) {                                                  // 17
		Roles.addUsersToRoles([id], 'block', 'postMessage');                               // 18
	},                                                                                  // 19
	'roles.unblockUser': function (id) {                                                // 20
		Roles.removeUsersFromRoles([id], 'block', 'postMessage');                          // 21
	},                                                                                  // 22
	'user.removeUser': function (id) {                                                  // 23
		Meteor.users.remove({                                                              // 24
			_id: id                                                                           // 24
		});                                                                                // 24
	},                                                                                  // 25
	'user.updateUser': function (username, name, email, phone) {                        // 26
		if (username === "root") {                                                         // 27
			return "Admin details can't be changed.";                                         // 28
		}                                                                                  // 29
                                                                                     //
		Meteor.users.update({                                                              // 30
			"username": username                                                              // 30
		}, {                                                                               // 30
			$set: {                                                                           // 30
				"profile": {                                                                     // 30
					"name": name,                                                                   // 30
					"email": email,                                                                 // 30
					"phone": phone                                                                  // 30
				}                                                                                // 30
			}                                                                                 // 30
		});                                                                                // 30
		return true;                                                                       // 31
	}                                                                                   // 32
});                                                                                  // 7
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
