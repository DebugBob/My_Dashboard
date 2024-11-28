import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

const Todo = () => {
  return (
    <section>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </section>
  );
};

export default Todo;
