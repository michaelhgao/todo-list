import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
    
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/todos");
                setTodos(response.data);
            } 
            catch (error) {
                console.error("Error Fetching TODOs:", error);
            }
        };
        fetchTodos();
    }, [todos]);

    return (
        <div>
            <AddTodo />
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo} />
                ))}
            </ul>
        </div>
    );

}

export default TodoList;
