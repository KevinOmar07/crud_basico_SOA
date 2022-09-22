const {Model,DataTypes} = require('sequelize');
const sequelize = require("../database/db.js")

class User extends Model{}

User.init({
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName:"user",
    freezeTableName: true
}

)

module.exports = User;
