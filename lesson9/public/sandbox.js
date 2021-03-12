"use strict";
var loginDetail = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greet = function (user) {
    console.log(user.name + " says hello");
};
loginDetail("12345", "Bukunmi");
greet({ name: "Bukunmi", uid: 12345 });
