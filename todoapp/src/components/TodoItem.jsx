import styles from "./todoItem.module.css";
export default function TodoItem({ item, todoSave, setTodoSave }) {
  function handleDelete(item) {
    console.log("Delete Button clicked for item", item);
    setTodoSave(todoSave.filter((todo) => todo !== item));
  }

  function handleClick(name){
   const newArray = todoSave.map((todo) => todo.name === name ? {...todo,done:!todo.done} : todo);
   setTodoSave(newArray);
   console.log(todoSave)
  }

  const className = item.done ? styles.completed : "" ;

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
       <span className={className} onClick={() => handleClick(item.name)}> {item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
