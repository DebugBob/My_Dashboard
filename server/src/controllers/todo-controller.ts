import { Request, Response } from 'express';
import { Todo } from '../models/todo.js';

// GET /Todo
export const getAllTodos = async (_req: Request, res: Response) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /Todo/:id
export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /Todos
export const createTodo = async (req: Request, res: Response) => {
  const {description} = req.body;
  try {
    const newTodo = await Todo.create({description});
    res.status(201).json(newTodo);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /Todo/:id
export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      todo.description = description;
      await todo.save();
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /Todo/:id
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy();
      res.json({ message: 'Todo deleted' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
