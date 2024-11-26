import * as express from 'express';
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../../controllers/todo-controller.js';

const router = express.Router();

// GET /todos - Get all todos
router.get('/', getAllTodos);

// GET /todos/:id - Get a todo by id
router.get('/:id', getTodoById);

// POST /todos - Create a new todo
router.post('/', createTodo);

// PUT /todos/:id - Update a todo by id
router.put('/:id', updateTodo);

// DELETE /todos/:id - Delete a todo by id
router.delete('/:id', deleteTodo);

export { router as todoRouter };