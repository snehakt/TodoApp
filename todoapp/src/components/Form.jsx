import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todoSave, setTodoSave }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodoSave([...todoSave, todo]);
    setTodo({name:"",done:false});
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo({name:e.target.value, done:false})}
        type="text"
        value={todo.name}
        placeholder="Enter Todo Item..."
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
      </div>
    </form>
  );
}
