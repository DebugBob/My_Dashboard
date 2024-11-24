import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { TodoFactory } from './todo.js';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const Todo = TodoFactory(sequelize);

// User.hasMany(Todo, { foreignKey: 'assignedUserId' });
// Todo.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser'});

export { sequelize, Todo};
