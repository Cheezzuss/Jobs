const Sequelize = require('sequelize');
const connection = require('../config/database');

const jobs =connection.define('job',{
  title:Sequelize.STRING,
  technologies:Sequelize.STRING,
  salary:Sequelize.STRING,
  description:Sequelize.TEXT
})

module.exports =jobs;