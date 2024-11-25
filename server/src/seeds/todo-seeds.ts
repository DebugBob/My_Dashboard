import { Todo } from '../models/todo.js';

export const seedTodos = async () => {
  await Todo.bulkCreate([
    { description: 'Complete To-Do List Seeding' },
    { description: 'Complete Front End UI' },
    { description: 'Submit Project 2 Assignment' },
  ]);
};
