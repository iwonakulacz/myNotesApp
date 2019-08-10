import React from "react";
import styles from "./FormRadio.module.scss";

const Radio = ({ name, checked, onRadioChangeFn, children}) => (
  <label className={styles.radio}>
    <input
      type="radio"
      name={name}
      onChange={onRadioChangeFn}
      checked={checked}
    />
    <div className={styles.radioButton} />
    {children}
  </label>
);

export default Radio;
