import styles from "../TodoItem/TodoItem.module.css";

const TodoItem = ({ todo, handleStatus, checked }) => {
  return (
    <>
      <div className={styles.checked}>
        <input type="checkbox" onChange={() => handleStatus(todo.id)} />
      </div>
    </>
  );
};

export default TodoItem;
