var Sequelize = require('sequelize');
var connection = new Sequelize('password_db', 'root');

var bcrypt = require('bcryptjs');

//use prompt to interact with user
var prompt = require('prompt');
prompt.start();
prompt.message = '';

//model
var User = connection.define('user', {
    name: Sequelize.TEXT,
    password: Sequelize.TEXT
});

var saveUser = function(username, password){
    bcrypt.genSalt(10, function(err, salt){
        console.log("Salt the first time around is " + salt);
        bcrypt.hash(password, salt, function(err, hash){
            User.create({
                name: username,
                password: hash
            })
        })
    })
}

var checkUser = function(username, password){
    User.findOne({
        where: {
            name: username,
        }
    }).then(function(results){
        bcrypt.compare(password, results.dataValues.password, function(err, results){
            console.log("Results are " + results); 
        })
    })
}