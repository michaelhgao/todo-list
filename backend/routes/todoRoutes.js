const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Create a new Todo
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo({
            text: req.body.text,
            completed: req.body.completed || false,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all Todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a Todo
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(todo);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a Todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
