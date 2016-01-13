/**
 * Created by bjs on 2016/1/13.
 */
exports = module.exports = function(sequelize,DataTypes){
    var membModel = sequelize.define('members',{
            tel:DataTypes.STRING(11),
            email:DataTypes.STRING(50),
            address:DataTypes.STRING
        }
    );
    return membModel;
}