import { useState } from "react";
import s from "../todolist/TodoList.module.css";

const TodoItem = ({ id, color }) => {
  // const { id, color } = item;
  console.log("TodoItem id:", id, "TodoItem Color:", color);
  /*  const [todoItem, setTodoItem] = useState();
  const handleTodoItem = () => {
    console.log("todoItem");
  }; */
  return <li>{color}</li>;
};
export default TodoItem;
