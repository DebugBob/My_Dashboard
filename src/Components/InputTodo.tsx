import React, { useState } from "react";

const InputTodo: React.FC = () => {
  const [description, setDescription] = useState<string>("");

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <section>
      <h1 className="text-center mt-5">My Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default InputTodo;
