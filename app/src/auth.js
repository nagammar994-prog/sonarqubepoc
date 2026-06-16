function authenticate(username,password){

    if(username=="admin" && password=="admin"){
        return true;
    }

    return false;
}

module.exports = authenticate;
