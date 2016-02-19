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