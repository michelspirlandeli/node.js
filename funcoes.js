function validar(login, senha){
    if(login == "michel" && senha == "123")
        return true;
    return false;
}

exports.validarUsuario = validar;