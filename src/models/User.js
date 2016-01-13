/**
 * Created by bjs on 2016/1/7.
 */
exports = module.exports = function (sequelize, DataTypes) {
    var userModel = sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING //,
            //field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });

    return userModel;
};