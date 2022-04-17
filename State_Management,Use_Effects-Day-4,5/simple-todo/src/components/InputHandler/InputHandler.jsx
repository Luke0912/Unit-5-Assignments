import styles from "./InputHandler.module.css";
import { useState } from "react";

const InputHandler = ({ getData }) => {
  const [text, setText] = useState();
  return (
    <>
      <div className={styles.inputHandler}>
        <div className={styles.inputHandler__text}>
          <input
            type="text"
            placeholder="Write Something"
            className={styles.inputBox}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputHandler__action}>
          <button
            className={styles.actionBtn}
            onClick={() => {
              getData(text);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default InputHandler;
