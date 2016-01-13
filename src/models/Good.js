/**
 * Created by bjs on 2016/1/13.
 */

exports = module.exports = function (sequelize, DataTypes) {
    var goodModel = sequelize.define('goods', {
        name: {type: DataTypes.STRING,allowNull:false, comment: '商品名称'},
        price: {type: DataTypes.FLOAT,allowNull:false, comment: '商品价格'}
    }, {
        freezeTableName: true
    });
    return goodModel;
};