const { Topic } = require("./Clases/Clase_temas");
const { User } = require("./Clases/Clase_usuario");

function newUser(name) {
  return new User(name);
}

function newTopic(name) {
  return new Topic(name);
}
module.exports = {
  newUser,
  newTopic,
};
