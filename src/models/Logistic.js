/**
 * Created by bjs on 2016/1/13.
 */

exports = module.exports = function(sequelize,DataTypes){
    var logisticModel = sequelize.define('logistics',{
        code:{type:DataTypes.STRING(20),allowNull:false},
        remark:DataTypes.STRING
    });
    return logisticModel;
};