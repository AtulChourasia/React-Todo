import { useState } from 'react'


export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    return <div>
        
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}></input>

        <br />

        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Descriptions" onChange={function(e){
            const value = e.target.value;
            setDesc(value);
        }}></input><br />
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: desc
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("todo added")
            })}
        }>Add a todo</button><br />
    </div>
}