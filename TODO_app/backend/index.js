const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
};



const app = express()

app.use(cors(corsOptions));
app.use(express.json())

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    console.log(createPayload.title);
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent wrong input"
        })
        return;
    }
    // put it in mongodb

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});

    res.json(todos)
})

app.put("/completed",async function(req,res){
     const updatePayload = req.body;
     const parsedupdatePayload = updateTodo.safeParse(updatePayload)

    if(!parsedupdatePayload.success){
        res.status(411).json({
            msg: "you sent wrong input"
        })
        return;
    }

    await todos.update({_id: req.body.id},{
        completed:true
    })

    res.json({
        msg: "todo is marked as completed"
    })
})


app.listen(3000);