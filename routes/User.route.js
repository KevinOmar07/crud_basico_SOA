const express = require("express");
const router = express.Router()
const UserService = require("../controller/user.controller");

router.post("/create",UserService.CreateUser);
router.post("/get",UserService.GetUser);
router.post("/update",UserService.UpdateUser)
router.delete("/delete",UserService.DeleteUser)


module.exports = router;