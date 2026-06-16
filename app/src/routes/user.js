const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    const password = "admin123";

    let user = null;

    if(user == undefined){
        console.log("User missing");
    }

    res.send({
        username: "demo",
        password: password
    });

});

module.exports = router;
