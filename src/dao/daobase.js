/**
 * Created by bjs on 2016/1/6.
 */

var Sequelize = require('sequelize');
var config = require('../config/dbConfig');

var sequelize = new Sequelize(config.dbUrl);

var User = sequelize.import('../models/User');
var Order = sequelize.import('../models/Order');

Order.sync({force: true}).then(function () {
    console.info('Sync order table');
});
User.sync({force: false}).then(function () {
    // Table created
    return User.create({
        firstName: 'Kali',
        lastName: 'Ben'
    });
});


User.update({firstName: 'bai'},
    {where: {lastName: 'Ben'}}
);


sequelize.query('select firstName from user',
    {type: sequelize.QueryTypes.SELECT}).then(function (data) {
        data.forEach(function (d) {
            console.info(d.firstName);
        })

    });