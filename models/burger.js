// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;