import React from "react";
import axios from "axios";

function TodoItem({ todo }) {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
        } 
        catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const toggleComplete = async () => {
        try {
            await axios.put(`http://localhost:5000/api/todos/${todo._id}`, {
            completed: !todo.completed
            });
        } 
        catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <li>
            <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
                onClick={toggleComplete}
            >
                {todo.text}
            </span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );

}

export default TodoItem;
