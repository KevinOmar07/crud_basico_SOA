const express = require("express");
const sequelize = require("./database/db");
const app = express()
const user = require("./routes/User.route")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


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