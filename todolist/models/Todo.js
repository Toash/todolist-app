//structure for todo
const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true,
    },
});

// This file exposes a mongoose model
module.exports = new mongoose.model("Todo", TodoSchema);