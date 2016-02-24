var Sequelize = require('sequelize');
var connection = new Sequelize('password_db', 'root');

var bcrypt = require('bcryptjs');

//use prompt to interact with user
var prompt = require('prompt');
prompt.start();
prompt.message = '';

//model
var User = connection.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [5,10],
                msg: "Your password must be between 5-10 characters"
            },
            isUppercase: true
        }
    }
}, {
    hooks: {
        beforeCreate: function(input){
            input.password = bcrypt.hashSync(input.password, 10);
        }
    }
});
