"use strict";

var EVENTS;
module.exports = EVENTS = {
    "FIND_ALL_USERS": "UM.FIND_ALL_USERS",
    "FIND_USER": "UM.FIND_USER",

    "CREATE_USER": "UM.CREATE_USER",
    "UPDATE_USER": "UM.UPDATE_USER",
    "DELETE_USER": "UM.DELETE_USER",

    "USER_CREATED": "UM.USER_CREATED",
    "USER_UPDATED": "UM.USER_UPDATED",
    "USER_DELETED": "UM.USER_DELETED"
};

console.log(module.exports);