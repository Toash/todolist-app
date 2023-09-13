const router = require("express").Router()
const Todo = require("../models/Todo")

// routes will be here
router.get("/", async(req,res)=>{
    
    //finds all todo
    const allTodo = await Todo.find({});


    //sends to index.ejs  for the home dir.
    //renders all the todos in the home page.
    res.render("index.ejs", {todo: allTodo});
})


module.exports = router;