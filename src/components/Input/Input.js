import React from "react";
import styles from "./Input.module.scss";

const Input = ({ name, children, textarea }) => (
  <label className={styles.label}>
    <input
      className={textarea ? styles.textarea : styles.input}
      type="text"
      name={name}
      placeholder=" "
    />
    <span className={styles.placeholder}>{children}</span>
  </label>
);

export default Input;
