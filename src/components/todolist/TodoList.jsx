import { useState } from "react";
import TodoItem from "../todoitem/TodoItem";
import s from "./TodoList.module.css";
import todoData from "../../assets/todos.json";

/* console.log(
  "TodoList id:",
  todoData[0].id,
  "TodoList Color:",
  todoData[0].color
);
 */
const TodoList = () => {
  const [todolist, setTodoList] = useState();
  const handleTodolist = () => {
    console.log("todolist");
  };
  return (
    <>
      <div>
        <input className="" />
        <button className="">Add</button>
      </div>
      <ul className={s.list}>
        {todoData.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
