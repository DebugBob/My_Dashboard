import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

// Define the type for a Todo item
interface Todo {
  todo_id: number;
  description: string;
}

const ListTodos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Delete todo function
  const deleteTodo = async (id: number) => {
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // Fetch todos from the server
  const getTodos = async () => {
    try {
      const response = await fetch("/todos");
      const jsonData: Todo[] = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListTodos;
