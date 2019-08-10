import React from "react";
import styles from "./Input.module.scss";

const Input = ({ name, children, textarea, value, onChangeFn }) => (
  <label className={styles.label}>
    <input
      className={textarea ? styles.textarea : styles.input}
      type="text"
      name={name}
      placeholder=" "
      value={value}
      onChange={onChangeFn}
    />
    <span className={styles.placeholder}>{children}</span>
  </label>
);

export default Input;
