import styles from "./TodoHandler.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { useState } from "react";
import { nanoid } from "nanoid";
import InputHandler from "../InputHandler/InputHandler";

const TodoHandler = () => {
  const [todoList, setTodoList] = useState([]);

  const getData = (todo) => {
    const payLoad = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todoList, payLoad]);
  };
  const handleStatus = (id) => {
    setTodoList(
      todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };
  return (
    <>
    <InputHandler getData={getData}/>
      {todoList.map((todo) => {
        return (
          <div className={styles.todoHandler} key={todo.id}>
            <div className={styles.todoHandler__text}>
              <span>{todo.title}</span>
            </div>
            <div className={styles.todoHandler__action}>
              <TodoItem
                todo={todo}
                handleStatus={handleStatus}
                checked={todo.status}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default TodoHandler;
