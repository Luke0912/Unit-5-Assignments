import styles from "../TodoItem/TodoItem.module.css";

const TodoItem = ({ todo, handleStatus, checked }) => {
  return (
    <>
      <div
        className={`${styles.inputContainerOuter} ${
          checked ? styles.completed : ""
        }`}
      >
        <div className={styles.inputContainerInner}>
          <input
            type="checkbox"
            className={styles.input}
            onChange={() => handleStatus(todo.id)}
          />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
