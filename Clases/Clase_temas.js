const EventEmmiter = require("events");

class Topic extends EventEmmiter {
  constructor(name) {
    super();
    this.name = name;
  }
  messages = [];
  suscribers = [];

  addMesagge(user, text) {
    this.messages.push({ User: user, mesagge: text });
    this.emit(`newMess`, user);
  }

  addSubscribers(user) {
    this.suscribers.push(user);
  }
}

module.exports = {
  Topic,
};
