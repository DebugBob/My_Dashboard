import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface TodoAttributes {
  id: number;
  description: string;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, 'id'> {}

export class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
  public id!: number;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function TodoFactory(sequelize: Sequelize): typeof Todo {
    Todo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'todo',
      sequelize,
      hooks: {}
      }
  );

  return Todo;
}
