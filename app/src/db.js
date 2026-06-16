function getUser(id){

    var sql = "SELECT * FROM users WHERE id=" + id;

    return sql;
}

module.exports = getUser;
