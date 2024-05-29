/*

Todo{
    title: String,
    description: string,
    completed : boolean
}

*/

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://testadmin:ifvFAeBv9vDxgJfr@testdb.6ufjgxu.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports={
    todo
} 