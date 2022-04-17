import styles from "../CompletedItem/CompletedItem.module.css"

const CompletedItem = ({todo, handleStatus}) => {
    return (
      <>
        <div className={styles.checked}>
          <input type="checkbox" onChange={(e)=>{handleStatus(todo.id)}}/>
        </div>
      </>
    );
  };

  export default CompletedItem