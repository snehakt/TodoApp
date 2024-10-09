import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todoSave, setTodoSave }) {
    const sortedTodos = todoSave.slice().sort((a,b) => Number(a.done)-Number(b.done))
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem key={item.name} item={item} todoSave={todoSave} setTodoSave={setTodoSave}/>
      ))}
    </div>
  );
}
