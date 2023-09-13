const router = require("express").Router()
const Todo = require("../models/Todo.js")

//routes
//routes post requests to /add/todo with the callback
router.post("/add/todo",(req,res)=>{
    const todo = req.body.todo;
    //console.log(todo);

    //Creates new todo from the form data
    const newTodo = new Todo({todo:todo})

    // save the todo
    
    newTodo.save()
    .then(()=>{
        console.log("Successfully added todo!");
        res.redirect("/")
    })
    .catch((err) => console.log(err)) //error
    


})

// routing delete request
router.get("/delete/todo/:_id", (req,res) =>{
    const _id = req.params._id;

    // delete todo with _id in database
    Todo.deleteOne({_id:_id})
    .then(()=>{
        console.log("Deleted todo " +  _id + " successfully")
        res.redirect("/")
    })
    .catch((err) => console.log(err));
});

router.get("/edit/todo/:_id", (req,res) => {
    const _id = req.params._id;
    // edit todo
})

module.exports = router;