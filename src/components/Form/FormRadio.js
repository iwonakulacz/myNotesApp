import React from "react";
import styles from './FormRadio.module.scss';

const Radio = ({name, children}) => (
  <label className={styles.radio}>
    <input type="radio" name={name} />
    <div className={styles.radioButton} />
    {children}
  </label>
);

export default Radio;
