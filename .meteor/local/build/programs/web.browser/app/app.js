var require = meteorInstall({"imports":{"ui":{"adminPanel.html":["./template.adminPanel.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/adminPanel.html                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.adminPanel.js");                                                                  // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.adminPanel.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.adminPanel.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminPanel");                                                                                    // 2
Template["adminPanel"] = new Template("Template.adminPanel", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "adminDashboard"                                                                                            // 6
  }, "\n\n\t\t", HTML.DIV({                                                                                            // 7
    class: "userListDiv"                                                                                               // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("allUsers")), "\n\t\t"), "\n\n\t\t", HTML.DIV({                 // 9
    class: "addUserDiv"                                                                                                // 10
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("addUser")), "\n\t\t"), "\n\t");                                // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("addUser");                                                                                       // 14
Template["addUser"] = new Template("Template.addUser", (function() {                                                   // 15
  var view = this;                                                                                                     // 16
  return HTML.Raw('<h4>Add a new User</h4>\n\t<form class="createUser">\n\t\t<div class="input-field">\n\t\t\t<input type="radio" name="permission" value="user" id="user" checked="">\n\t\t\t<label for="user">User</label>\n\t\t</div>\n\t\t<div class="input-field">\n\t\t\t<input type="radio" name="permission" value="manager" id="manager">\n\t\t\t<label for="manager">Manager</label>\n\t\t</div>\n\t\t<div class="input-field">\n\t\t\t<input type="radio" name="permission" value="admin" id="admin">\n\t\t\t<label for="admin">Admin</label>\n\t\t</div>\n\t\t<div class="input-field">\n\t\t\t<input type="text" name="username" placeholder="username">\n\t\t</div>\n\t\t<div class="input-field">\n\t\t\t<input type="password" name="password" placeholder="password">\n\t\t</div>\n\t\t<button class="btn waves-effect waves-light" type="submit" name="action">Submit <i class="material-icons right">send</i>\n\t\t  \t</button>\n\t</form>');
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"allUsers.html":["./template.allUsers.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/allUsers.html                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.allUsers.js");                                                                    // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.allUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.allUsers.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("allUsers");                                                                                      // 2
Template["allUsers"] = new Template("Template.allUsers", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "userList"                                                                                                  // 6
  }, HTML.Raw("\n\t\t<h4>User List</h4>\n\t\t"), HTML.UL("\n\t\t\t", Blaze.Each(function() {                           // 7
    return Spacebars.call(view.lookup("users"));                                                                       // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t\t", HTML.LI("\n\t\t\t\t\t", HTML.DIV({                                                          // 10
      class: "chip"                                                                                                    // 11
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:username", function() {                                                    // 12
      return Spacebars.mustache(view.lookup("username"));                                                              // 13
    }), "\n\t\t\t\t\t\t", HTML.Comment(" Display the below only to admin and manager "), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("isInRole"), "admin, manager");                                        // 15
    }, function() {                                                                                                    // 16
      return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 17
        class: "blockUser"                                                                                             // 18
      }, "Block User"), "\n\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                            // 19
        class: "unblockUser"                                                                                           // 20
      }, "Unblock User"), "\n\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                          // 21
        class: "changeProfileInfo"                                                                                     // 22
      }, "Change Profile Info"), "\n\t\t\t\t\t\t" ];                                                                   // 23
    }), "\n\n\t\t\t\t\t\t", HTML.Comment(" Display the below only to admin "), "\n\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("isInRole"), "admin");                                                 // 25
    }, function() {                                                                                                    // 26
      return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 27
        class: "removeUser"                                                                                            // 28
      }, "Remove User"), "\n\t\t\t\t\t\t" ];                                                                           // 29
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                  // 30
  }), "\n\t\t"), HTML.Raw('\n\n\t\t<div class="changeProfileDiv">\n\t\t\t<input type="text" name="username" disabled="" class="un">\n\t\t\t<input type="text" name="name" class="name">\n\t\t\t<input type="text" name="email" class="email">\n\t\t\t<input type="text" name="phone" class="phone">\n\n\t\t\t<button class="updateUser">Update User Details</button>\n\t\t</div>\n\t'));
}));                                                                                                                   // 32
                                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.html":["./template.body.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/body.html                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.body.js");                                                                        // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.body.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.body.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return HTML.DIV({                                                                                                    // 4
    class: "container-fluid"                                                                                           // 5
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 6
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 7
  }, function() {                                                                                                      // 8
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("dashboard")), "\n\t\t" ];                              // 9
  }, function() {                                                                                                      // 10
    return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("login")), "\n\t\t" ];                                // 11
  }), "\n\t");                                                                                                         // 12
}));                                                                                                                   // 13
Meteor.startup(Template.body.renderToDocument);                                                                        // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"changeProfileInfo.html":["./template.changeProfileInfo.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/changeProfileInfo.html                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.changeProfileInfo.js");                                                           // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.changeProfileInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.changeProfileInfo.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("changeProfileInfo");                                                                             // 2
Template["changeProfileInfo"] = new Template("Template.changeProfileInfo", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "profilePage"                                                                                               // 6
  }, "\n\t\t", Blaze.Each(function() {                                                                                 // 7
    return Spacebars.call(view.lookup("profile"));                                                                     // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.INPUT({                                                                                  // 10
      type: "text",                                                                                                    // 11
      value: function() {                                                                                              // 12
        return Spacebars.mustache(view.lookup("username"));                                                            // 13
      }                                                                                                                // 14
    }), "\n\t\t\t", HTML.INPUT({                                                                                       // 15
      type: "text",                                                                                                    // 16
      value: function() {                                                                                              // 17
        return Spacebars.mustache(view.lookup("password"));                                                            // 18
      }                                                                                                                // 19
    }), "\n\t\t" ];                                                                                                    // 20
  }), "\n\t");                                                                                                         // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dashboard.html":["./template.dashboard.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/dashboard.html                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.dashboard.js");                                                                   // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.dashboard.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.dashboard.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("dashboard");                                                                                     // 2
Template["dashboard"] = new Template("Template.dashboard", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "dashBoard"                                                                                                 // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "dashboard-header"                                                                                          // 8
  }, "\n\t\t\t", HTML.SPAN({                                                                                           // 9
    class: "username"                                                                                                  // 10
  }, Blaze.View("lookup:currentUser.username", function() {                                                            // 11
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                                  // 12
  })), "\n\n\t\t\t", HTML.Raw('<a class="logout waves-effect waves-light btn">Logout</a>'), "\n\t\t"), "\n\n\t\t", HTML.DIV({
    class: "panels"                                                                                                    // 14
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("messageBoard")), "\n\n\t\t\t", HTML.DIV({                      // 15
    class: "controlPanel"                                                                                              // 16
  }, "\n\t\t\t\t", HTML.Raw("<!-- Depending on the logged in user this would display different templates -->"), "\n\t\t\t\t", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("isInRole"), "admin");                                                   // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("adminPanel")), "\n\t\t\t\t" ];                     // 20
  }, function() {                                                                                                      // 21
    return Blaze.If(function() {                                                                                       // 22
      return Spacebars.dataMustache(view.lookup("isInRole"), "user");                                                  // 23
    }, function() {                                                                                                    // 24
      return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("userPanel")), "\n\t\t\t\t" ];                    // 25
    }, function() {                                                                                                    // 26
      return Blaze.If(function() {                                                                                     // 27
        return Spacebars.dataMustache(view.lookup("isInRole"), "manager");                                             // 28
      }, function() {                                                                                                  // 29
        return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("managerPanel")), "\n\t\t\t\t" ];               // 30
      });                                                                                                              // 31
    });                                                                                                                // 32
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.html":["./template.login.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/login.html                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.login.js");                                                                       // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.login.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("login");                                                                                         // 2
Template["login"] = new Template("Template.login", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="loginDiv">\n\t\t<h1 class="">Login</h1>\n\t\t<form class="login">\n\t\t\t<div class="input-field">\n\t\t\t\t<label for="username">Username</label>\n\t\t\t\t<input name="username" type="text" placeholder="Enter username">\n\t\t\t</div>\n\n\t\t\t<div class="input-field">\n\t\t\t\t<label for="password">Password</label>\n\t\t\t\t<input name="password" type="password" placeholder="Enter password">\n\t\t\t</div>\n\n\t\t\t<button class="btn waves-effect waves-light" type="submit" name="action">Submit <i class="material-icons right">send</i>\n\t\t  \t</button>\n\t\t</form>\n\t</div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"managerPanel.html":["./template.managerPanel.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/managerPanel.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.managerPanel.js");                                                                // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.managerPanel.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.managerPanel.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("managerPanel");                                                                                  // 2
Template["managerPanel"] = new Template("Template.managerPanel", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Spacebars.include(view.lookupTemplate("allUsers"));                                                           // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messageBoard.html":["./template.messageBoard.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/messageBoard.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.messageBoard.js");                                                                // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.messageBoard.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.messageBoard.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("messageBoard");                                                                                  // 2
Template["messageBoard"] = new Template("Template.messageBoard", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "messages"                                                                                                  // 6
  }, HTML.Raw('\n\t\t<div class="messageTextDiv">\n\t\t\t<h4>Messages</h4>\n\t\t</div>\n\n\t\t'), HTML.DIV({           // 7
    class: "messageArea"                                                                                               // 8
  }, "\n\t\t      ", Blaze.Each(function() {                                                                           // 9
    return Spacebars.call(view.lookup("messages"));                                                                    // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t        ", Spacebars.include(view.lookupTemplate("message")), "\n\t\t      " ];                    // 12
  }), "\n\t\t"), "\n\n\t\t", HTML.FORM({                                                                               // 13
    class: "inputArea"                                                                                                 // 14
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 15
    class: "input-field"                                                                                               // 16
  }, "\n\t\t\t\t", HTML.INPUT({                                                                                        // 17
    type: "text",                                                                                                      // 18
    disabled: function() {                                                                                             // 19
      return Spacebars.mustache(view.lookup("isInRole"), "block", "postMessage");                                      // 20
    },                                                                                                                 // 21
    name: "message",                                                                                                   // 22
    id: "",                                                                                                            // 23
    placeholder: "Enter message...",                                                                                   // 24
    class: "inputMessage",                                                                                             // 25
    autofocus: ""                                                                                                      // 26
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 27
}));                                                                                                                   // 28
                                                                                                                       // 29
Template.__checkName("message");                                                                                       // 30
Template["message"] = new Template("Template.message", (function() {                                                   // 31
  var view = this;                                                                                                     // 32
  return HTML.DIV({                                                                                                    // 33
    class: "card blue-grey darken-1"                                                                                   // 34
  }, "\n        ", HTML.DIV({                                                                                          // 35
    class: "card-content white-text"                                                                                   // 36
  }, "\n        \t", Blaze.View("lookup:text", function() {                                                            // 37
    return Spacebars.mustache(view.lookup("text"));                                                                    // 38
  }), "\n        "), "\n\t    ", HTML.DIV({                                                                            // 39
    class: "card-action"                                                                                               // 40
  }, "\n\t    \t", Blaze.View("lookup:username", function() {                                                          // 41
    return Spacebars.mustache(view.lookup("username"));                                                                // 42
  }), " - ", Blaze.View("lookup:createdAt", function() {                                                               // 43
    return Spacebars.mustache(view.lookup("createdAt"));                                                               // 44
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 45
    return Spacebars.dataMustache(view.lookup("isInRole"), "admin");                                                   // 46
  }, function() {                                                                                                      // 47
    return [ "\n\t    \t\t", HTML.A({                                                                                  // 48
      class: "deleteMessage btn-floating btn-small waves-effect waves-light red"                                       // 49
    }, HTML.I({                                                                                                        // 50
      class: "material-icons"                                                                                          // 51
    }, "close")), "\n\t    \t" ];                                                                                      // 52
  }), "\n\n\t    "), "\n    ");                                                                                        // 53
}));                                                                                                                   // 54
                                                                                                                       // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userPanel.html":["./template.userPanel.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/userPanel.html                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.userPanel.js");                                                                   // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.userPanel.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/template.userPanel.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("userPanel");                                                                                     // 2
Template["userPanel"] = new Template("Template.userPanel", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("allUsers")), HTML.Raw('\n\t<hr>\n\t<button class="showProfile">Show Profile</button>\n\t<div class="ownProfileInfo">\n\t\t<input type="text" name="username" class="ownUsername" disabled="">\n\t\t<input type="text" name="name" class="ownName">\n\t\t<input type="text" name="email" class="ownEmail">\n\t\t<input type="text" name="phone" class="ownPhone">\n\n\t\t<button class="changeInfo">Update Info</button>\n\t</div>') ];
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminPanel.js":["./adminPanel.html","./allUsers.js","meteor/meteor","meteor/templating",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/adminPanel.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.importSync("./adminPanel.html");                                                                                // 1
module.importSync("./allUsers.js");                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 3);                                                                                                                 // 1
Template.adminPanel.events({                                                                                           // 13
	'submit .createUser': function (event) {                                                                              // 14
		event.preventDefault();                                                                                              // 15
		var permission = event.target.permission.value;                                                                      // 17
		var username = event.target.username.value;                                                                          // 19
		var password = event.target.password.value;                                                                          // 21
                                                                                                                       //
		if (username && password) {                                                                                          // 23
			Meteor.call('accounts.addUser', username, password, function (error, result) {                                      // 24
				Meteor.call('roles.setRole', result, permission);                                                                  // 24
			});                                                                                                                 // 24
		}                                                                                                                    // 25
                                                                                                                       //
		event.target.username.value = "";                                                                                    // 28
		event.target.password.value = "";                                                                                    // 29
	}                                                                                                                     // 30
});                                                                                                                    // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"allUsers.js":["./allUsers.html","./changeProfileInfo.js","meteor/meteor","meteor/templating","meteor/alanning:roles",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/allUsers.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.importSync("./allUsers.html");                                                                                  // 1
module.importSync("./changeProfileInfo.js");                                                                           // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 3);                                                                                                                 // 1
var Roles = void 0;                                                                                                    // 1
module.importSync("meteor/alanning:roles", {                                                                           // 1
	Roles: function (v) {                                                                                                 // 1
		Roles = v;                                                                                                           // 1
	}                                                                                                                     // 1
}, 4);                                                                                                                 // 1
Template.allUsers.helpers({                                                                                            // 14
	users: function () {                                                                                                  // 15
		return Meteor.users.find({                                                                                           // 16
			_id: {                                                                                                              // 16
				$ne: Meteor.userId()                                                                                               // 16
			}                                                                                                                   // 16
		});                                                                                                                  // 16
	}                                                                                                                     // 17
});                                                                                                                    // 14
Template.allUsers.events({                                                                                             // 21
	'click .blockUser': function (event) {                                                                                // 22
		Meteor.call('roles.blockUser', this._id);                                                                            // 23
	},                                                                                                                    // 24
	'click .unblockUser': function (event) {                                                                              // 25
		Meteor.call('roles.unblockUser', this._id);                                                                          // 26
	},                                                                                                                    // 27
	'click .changeProfileInfo': function (event) {                                                                        // 28
		document.querySelector(".changeProfileDiv").style.display = "block";                                                 // 29
		var user = Meteor.users.findOne({                                                                                    // 30
			_id: this._id                                                                                                       // 30
		});                                                                                                                  // 30
		document.querySelector(".un").value = user.username;                                                                 // 31
                                                                                                                       //
		if (user.username === "root") {                                                                                      // 32
			// If user is root its profile will not be set or changed                                                           // 33
			document.querySelector(".name").value = "admin details can't be shown";                                             // 34
			document.querySelector(".email").value = "admin details can't be shown";                                            // 35
			document.querySelector(".phone").value = "admin details can't be shown";                                            // 36
		} else {                                                                                                             // 37
			if (user.profile.name) document.querySelector(".name").value = user.profile.name;else document.querySelector(".name").value = "no value set";
			if (user.profile.email) document.querySelector(".email").value = user.profile.email;else document.querySelector(".email").value = "no value set";
			if (user.profile.phone) document.querySelector(".phone").value = user.profile.phone;else document.querySelector(".phone").value = "no value set";
		}                                                                                                                    // 51
	},                                                                                                                    // 52
	'click .removeUser': function (event) {                                                                               // 53
		Meteor.call('user.removeUser', this._id);                                                                            // 54
	},                                                                                                                    // 55
	'click .updateUser': function (event) {                                                                               // 56
		var name = document.querySelector(".name").value;                                                                    // 57
		var email = document.querySelector(".email").value;                                                                  // 58
		var phone = document.querySelector(".phone").value; // Take the username from the DOM since the user id of the selected user isn't passed
                                                                                                                       //
		var username = document.querySelector(".un").value;                                                                  // 62
		Meteor.call('user.updateUser', username, name, email, phone, function (error, result) {                              // 64
			if (error) {                                                                                                        // 65
				alert(error);                                                                                                      // 66
			} else if (result === true) {                                                                                       // 67
				alert("User profile updated");                                                                                     // 69
			} else {                                                                                                            // 70
				alert(result);                                                                                                     // 72
			}                                                                                                                   // 73
		});                                                                                                                  // 74
	}                                                                                                                     // 75
});                                                                                                                    // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"body.js":["meteor/templating","../api/messages.js","meteor/meteor","meteor/accounts-base","./login.js","./dashboard.js","./body.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/body.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var Messages = void 0;                                                                                                 // 1
module.importSync("../api/messages.js", {                                                                              // 1
	Messages: function (v) {                                                                                              // 1
		Messages = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
var Accounts = void 0;                                                                                                 // 1
module.importSync("meteor/accounts-base", {                                                                            // 1
	Accounts: function (v) {                                                                                              // 1
		Accounts = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 3);                                                                                                                 // 1
module.importSync("./login.js");                                                                                       // 1
module.importSync("./dashboard.js");                                                                                   // 1
module.importSync("./body.html");                                                                                      // 1
Template.body.onCreated(function () {                                                                                  // 17
	function bodyOnCreated() {                                                                                            // 17
		Meteor.call('setInitialRole');                                                                                       // 18
	}                                                                                                                     // 19
                                                                                                                       //
	return bodyOnCreated;                                                                                                 // 17
}());                                                                                                                  // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"changeProfileInfo.js":["./changeProfileInfo.html","meteor/meteor","meteor/templating",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/changeProfileInfo.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.importSync("./changeProfileInfo.html");                                                                         // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
// import { Roles } from 'meteor/alanning:roles';                                                                      // 8
Template.changeProfileInfo.helpers({                                                                                   // 11
	profile: function () {                                                                                                // 12
		return Meteor.users.find({                                                                                           // 13
			_id: this._id                                                                                                       // 13
		});                                                                                                                  // 13
	}                                                                                                                     // 14
});                                                                                                                    // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"dashboard.js":["meteor/templating","meteor/meteor","meteor/accounts-base","./dashboard.html","./messageBoard.js","./adminPanel.js","./userPanel.js","./managerPanel.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/dashboard.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var Accounts = void 0;                                                                                                 // 1
module.importSync("meteor/accounts-base", {                                                                            // 1
	Accounts: function (v) {                                                                                              // 1
		Accounts = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
module.importSync("./dashboard.html");                                                                                 // 1
module.importSync("./messageBoard.js");                                                                                // 1
module.importSync("./adminPanel.js");                                                                                  // 1
module.importSync("./userPanel.js");                                                                                   // 1
module.importSync("./managerPanel.js");                                                                                // 1
Template.dashboard.events({                                                                                            // 19
	'click .logout': function (event) {                                                                                   // 20
		Meteor.logout();                                                                                                     // 21
	}                                                                                                                     // 22
});                                                                                                                    // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"login.js":["meteor/templating","meteor/meteor","meteor/accounts-base","./login.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/login.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var Accounts = void 0;                                                                                                 // 1
module.importSync("meteor/accounts-base", {                                                                            // 1
	Accounts: function (v) {                                                                                              // 1
		Accounts = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
module.importSync("./login.html");                                                                                     // 1
Template.login.events({                                                                                                // 9
	'submit .login': function (event) {                                                                                   // 10
		event.preventDefault();                                                                                              // 11
		var username = event.target.username.value;                                                                          // 13
		var password = event.target.password.value;                                                                          // 15
		Meteor.loginWithPassword({                                                                                           // 17
			"username": username                                                                                                // 17
		}, password, failedLogin);                                                                                           // 17
	}                                                                                                                     // 18
});                                                                                                                    // 9
                                                                                                                       //
function failedLogin(e) {                                                                                              // 21
	if (e) alert("Login Failed " + e);                                                                                    // 22
}                                                                                                                      // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"managerPanel.js":["./managerPanel.html","./allUsers.js","meteor/meteor","meteor/templating",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/managerPanel.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.importSync("./managerPanel.html");                                                                              // 1
module.importSync("./allUsers.js");                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"messageBoard.js":["meteor/meteor","meteor/templating","../api/messages.js","./messageBoard.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/messageBoard.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var Messages = void 0;                                                                                                 // 1
module.importSync("../api/messages.js", {                                                                              // 1
	Messages: function (v) {                                                                                              // 1
		Messages = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
module.importSync("./messageBoard.html");                                                                              // 1
Template.messageBoard.helpers({                                                                                        // 10
	messages: function () {                                                                                               // 11
		return Messages.find({});                                                                                            // 12
	}                                                                                                                     // 13
});                                                                                                                    // 10
Template.messageBoard.events({                                                                                         // 17
	'submit .inputArea': function (event) {                                                                               // 18
		event.preventDefault();                                                                                              // 19
		var message = event.target.message.value;                                                                            // 20
		if (message !== "") Meteor.call('messages.insert', message);                                                         // 22
		event.target.message.value = "";                                                                                     // 25
	},                                                                                                                    // 26
	'click .deleteMessage': function (event) {                                                                            // 27
		event.preventDefault();                                                                                              // 28
		Meteor.call('messages.remove', this._id);                                                                            // 30
	}                                                                                                                     // 31
});                                                                                                                    // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"userPanel.js":["./userPanel.html","meteor/templating","meteor/meteor",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/userPanel.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.importSync("./userPanel.html");                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.importSync("meteor/templating", {                                                                               // 1
	Template: function (v) {                                                                                              // 1
		Template = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
Template.userPanel.events({                                                                                            // 7
	'click .showProfile': function (event) {                                                                              // 8
		var user = Meteor.users.findOne({                                                                                    // 9
			_id: Meteor.userId()                                                                                                // 9
		});                                                                                                                  // 9
		document.querySelector('.ownProfileInfo').style.display = "block";                                                   // 10
		document.querySelector(".ownUsername").value = user.username;                                                        // 12
		if (user.profile.name) document.querySelector(".ownName").value = user.profile.name;else document.querySelector(".ownName").value = "no value set";
		if (user.profile.email) document.querySelector(".ownEmail").value = user.profile.email;else document.querySelector(".ownEmail").value = "no value set";
		if (user.profile.phone) document.querySelector(".ownPhone").value = user.profile.phone;else document.querySelector(".ownPhone").value = "no value set";
	},                                                                                                                    // 27
	'click .changeInfo': function (event) {                                                                               // 28
		var name = document.querySelector(".ownName").value;                                                                 // 29
		var email = document.querySelector(".ownEmail").value;                                                               // 30
		var phone = document.querySelector(".ownPhone").value;                                                               // 31
		var username = document.querySelector(".ownUsername").value;                                                         // 33
		Meteor.call('user.updateUser', username, name, email, phone, function (error, result) {                              // 35
			if (error) {                                                                                                        // 36
				alert(error);                                                                                                      // 37
			} else {                                                                                                            // 38
				alert("User profile updated");                                                                                     // 40
			}                                                                                                                   // 41
		});                                                                                                                  // 42
		document.querySelector('.ownProfileInfo').style.display = "none";                                                    // 43
	}                                                                                                                     // 44
});                                                                                                                    // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"api":{"messages.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/messages.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
	Messages: function () {                                                                                               // 1
		return Messages;                                                                                                     // 1
	}                                                                                                                     // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.importSync("meteor/meteor", {                                                                                   // 1
	Meteor: function (v) {                                                                                                // 1
		Meteor = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.importSync("meteor/mongo", {                                                                                    // 1
	Mongo: function (v) {                                                                                                 // 1
		Mongo = v;                                                                                                           // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var check = void 0;                                                                                                    // 1
module.importSync("meteor/check", {                                                                                    // 1
	check: function (v) {                                                                                                 // 1
		check = v;                                                                                                           // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
var Messages = new Mongo.Collection('messages');                                                                       // 9
Meteor.methods({                                                                                                       // 12
	'messages.insert': function (text) {                                                                                  // 13
		// This method is used to insert new messages into the collection                                                    // 14
		check(text, String); // Make sure the user is logged in before inserting a message                                   // 15
                                                                                                                       //
		if (!Meteor.userId()) {                                                                                              // 18
			throw new Meteor.Error('not-authorized');                                                                           // 19
		}                                                                                                                    // 20
                                                                                                                       //
		Messages.insert({                                                                                                    // 22
			text: text,                                                                                                         // 23
			createdAt: new Date(),                                                                                              // 24
			owner: Meteor.userId(),                                                                                             // 25
			username: Meteor.user().username                                                                                    // 26
		});                                                                                                                  // 22
	},                                                                                                                    // 28
	'messages.remove': function (id) {                                                                                    // 29
		// This method removes a message that the admin wishes to delete                                                     // 30
		check(id, String);                                                                                                   // 31
                                                                                                                       //
		if (Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)) {                                              // 32
			Messages.remove(id);                                                                                                // 33
		}                                                                                                                    // 34
	}                                                                                                                     // 35
});                                                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"main.js":["../imports/ui/body.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.importSync("../imports/ui/body.js");                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.js");