const EventEmmiter = require("events");

class Topic extends eventEmmiter {
  constructor(name) {
    this.name = name;
  }
  messages = [];
  suscribers = [];

  addMesagge(user, text) {
    this.messages.push({ User: user, mesagge: text });
  }

  addSubscribers(user) {
    this.suscribers.push(user);
  }
}

module.exports = {
  Topic,
};
