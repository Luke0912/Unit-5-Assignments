import styles from "./CompletedTodoHandler.module.css";
import CompletedItem from "./CompletedItem/CompletedItem";

const CompletedTodoHandler = ({ todoList, handleStatus }) => {
  return (
    <>
      <div className={styles.completed}> Completed To-do's</div>
      <div className={styles.main}>
      {todoList.map((todo) => {
        if (todo.status) {
          return (
            <div className={styles.completedContainer}>
              <div className={styles.showCompleted}>
                <CompletedItem
                  handleStatus={handleStatus}
                  todo={todo}
                ></CompletedItem>
                <div className={styles.showText}>{todo.title}</div>
              </div>
            </div>
          );
        }
        return "";
      })}
      </div>
    </>
  );
};
export default CompletedTodoHandler;
