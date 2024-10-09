import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todoSave, setTodoSave] = useState([]);
  const completedTodos = todoSave.filter((todo) => todo.done ).length
  const totalTodos = todoSave.length
 
 
  return (
    <div>
        <Form todoSave={todoSave} setTodoSave={setTodoSave} />
        <TodoList todoSave={todoSave} setTodoSave={setTodoSave} />
        <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
     
      
  
    </div>
  );
}
