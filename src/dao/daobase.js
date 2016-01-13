/**
 * Created by bjs on 2016/1/6.
 */

var Sequelize = require('sequelize');
var config = require('../config/dbConfig');

var sequelize = new Sequelize(config.dbUrl);

var Order = sequelize.import('../models/Order');
var Good = sequelize.import('../models/Good');
var Logistic = sequelize.import('../models/Logistic');
var Member = sequelize.import('../models/Member');

Order.sync({force: false}).then(function () {
    console.info('Sync order table');
});
Good.sync({force: false}).then(function () {
    console.info('Sync good table');
});
Logistic.sync({force:false}).then(function(){
    console.info('Sync logistic table');
});
Member.sync({force:false}).then(function(){
    console.info('Sync member table');
});
