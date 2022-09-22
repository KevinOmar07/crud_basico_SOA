
const sequelize = require("../database/db");
const User = require("../model/user.model");

const CreateUser = async (req,res) => {

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    await  User.create(user)
    .then(data => {
        res.send({
            "status":"successfully"
        })
    }).catch(e => {
        res.send("it can't create user")
    })

}

const GetUser = async(req,res) => {
    await User.findAll({
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.send({
            "data": data
        })
    }).catch (e => {
        console.log("error");
    })
}

const GetAllUser = async(req,res) => {
    await User.findAll()
    .then(data => {
        res.send({
            "data": data
        })
    }).catch (e => {
        console.log("error");
    })
}

const UpdateUser = async (req,res) => {
    await User.update({firstName: req.body.firstName,lastName: req.body.lastName},{
        where: {
            id: req.body.id
        }
    }).then(d => {
        res.send({
            "data": d
        })
    }).catch(e => {
        res.send({
            "data":"null"
        })
    })
}

const DeleteUser = async (req,res) =>  {
    await User.destroy({
    where:{
        id: req.body.id
    }
    }).then(data => {
        res.send({
            "status":"true"
        })
    }).catch(e => {
    res.send({
        "status": "false"
    })
    })
}

module.exports = {
    CreateUser,
    GetUser,
    GetAllUser,
    UpdateUser,
    DeleteUser
}

