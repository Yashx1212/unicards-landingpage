import styles from "./Input.module.css";

const Input = () => {
  return (
    <div
      className={`${styles.inputWrapper} {"flex flex__justifyContentSpaceBetween flex__alignItemsCenter}`}
    >
      <input type="text" placeholder="Enter Phone Number" />
      <div className={`${styles.spanText}`}></div>
      <button>Apply Now</button>
    </div>
  );
};

export default Input;
