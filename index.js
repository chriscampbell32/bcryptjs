var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
var prompt = require('prompt');

var sequelize = new Sequelize('message_db', 'root');


var User = sequelize.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

console.log('enter R for a new account');
console.log('enter L to login');

prompt.get(['input'], function(err, result) {
    if(result.input === 'R'){
        prompt.get(['username', 'password'], function(err, newUser){
            bcrypt.genSalt(10, function(err, salt){
                bcrypt.hash(newUser.Password, salt, function(err, hashedPassword){
                    User.create({
                        username: newUser.Username,
                        password: hashedPassword
                    }).then(function(){
                        console.log('SAVED!');
                    });
                });
            });
        });
    } ele {
        
    }
});




sequelize.sync();