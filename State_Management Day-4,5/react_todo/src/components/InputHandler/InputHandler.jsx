import styles from "./InputHandler/InputHandler.module"

const InputHandler = ()=>{
    return(
        <>
        <div className={styles.inputContainer}>
            <div className={styles.inputContainer__text}>
                <input type="text" className={styles.input__text} />
            </div>
            <div className={styles.inputContainer__action}>
                <button>+</button>
            </div>
        </div>
        </>
    )
}
export default InputHandler