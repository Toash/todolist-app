//entry point

const express = require("express")
const mongoose = require('mongoose')

const app = express()

//connection to mongodb (datebase server)
mongoose.connect("mongodb+srv://iitoash:Uquvfvrs2004@todolist.9dg8e0f.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true, //?
    useUnifiedTopology: true, //?
});

//middlewares
//parse incoming HTTP requests bodies with URL encoded data. (from POSTS)
app.use(express.urlencoded({extended:true}));
//automatically serve files from the public folder
app.use(express.static("public"));
app.set("view engine","ejs");

//routes 
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


//server config
app.listen(3000,()=>{
    console.log("Server started listening on port: 3000")
})