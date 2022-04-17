import styles from "./TodoHandler.module.css";
import TodoItem from "./TodoItem/TodoItem";
import InputHandler from "../InputHandler/InputHandler";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import CompletedTodoHandler from "../CompletedTodoHandler/ComplertedTodoHandler";

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
      <InputHandler getData={getData} />
      {todoList.map((todo) => {
        if (!todo.status) {
          return (
            <div className={styles.savedTextContainer} key={todo.id}>
              <TodoItem todo={todo} handleStatus={handleStatus}></TodoItem>
              <div className={styles.savedText}>{todo.title}</div>
            </div>
          );
        }
        return "";
      })}

      <CompletedTodoHandler todoList={todoList} handleStatus={handleStatus} />
    </>
  );
};
export default TodoHandler;
