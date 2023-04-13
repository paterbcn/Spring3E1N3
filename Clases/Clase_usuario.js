const EventEmmiter = require("events");

class User extends EventEmmiter {
  constructor(name) {
    super();
    this.name = name;
  }
}

module.exports = {
  User,
};
