const {User}=require("./Clases/Clase_usuario")

function newUser(name){
    return new User(name)
}

module.exports={
    newUser
}
