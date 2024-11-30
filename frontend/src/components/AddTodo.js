import React, { useState } from "react";
import axios from "axios";

function AddTodo() {

    const [text, setText] = useState("");

    const handleSubmit = async (e) => { 
        e.preventDefault();

        if (text) {
            try {
                await axios.post("http://localhost:5000/api/todos", { text });
                setText("");
            }
            catch (error) {
                console.error("Error Adding TODO: ", error)
            }
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );

}

export default AddTodo;
