/**
 * Created by bjs on 2016/1/7.
 */
require('date-utils');

exports = module.exports = function(sequelize,DataTypes){
    var orderModel = sequelize.define('orders',{
        orderId: {
            type: DataTypes.STRING(18),
            allowNull: false
        },
        goodId:DataTypes.INTEGER,
        membId:DataTypes.INTEGER,
        logisticId:DataTypes.INTEGER,
        payTime:DataTypes.DATE,
        num:DataTypes.INTEGER,
        paySum:DataTypes.FLOAT,
        payWay:DataTypes.CHAR(1),
        orderState:DataTypes.CHAR(1),
        remark:DataTypes.STRING(200)

    },{
        freezeTableName: true // Model tableName will be the same as the model name
    });

    return orderModel;
};
