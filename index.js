const express = require("express");
const sequelize = require("./database/db");
const app = express()
const user = require("./routes/User.route")


app.use(express.json());

app.use("/user",user)


app.get("/", (req,res)=>{
    res.json({
        "hello":"hola"
    })
})

app.listen(8080,()=>{
    console.log("Server running");
    sequelize.sync().then(() =>{
        console.log("db running");
    })
});