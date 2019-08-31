const Sequelize = require('sequelize');


module.exports = new Sequelize('jobs','postgres','9819141',{
  host: 'localhost',
  dialect:'postgres'
});