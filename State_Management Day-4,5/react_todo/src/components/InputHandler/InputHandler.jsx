import styles from "./InputHandler.module.css";
import { useState } from "react";

const InputHandler = ({getData}) => {
  const [text, setText] = useState();
  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.inputContainer__action}>
          <button
            className={styles.inputbtn}
            onClick={() => {
              getData(text);
            }}
          >
            +
          </button>
        </div>
        <div className={styles.inputContainer__text}>
          <input
            type="text"
            placeholder="Add a to-do"
            className={styles.input__text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InputHandler;
