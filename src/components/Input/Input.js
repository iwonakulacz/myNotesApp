import React from "react";
import styles from "./Input.module.scss";
import PropTypes from 'prop-types';

const Input = ({ tag: Tag, name, children, textarea, value, onChangeFn, ...props }) => (
  <label className={styles.label}>
    <Tag
      className={textarea ? styles.textarea : styles.input}
      type="text"
      name={name}
      placeholder=" "
      value={value}
      onChange={onChangeFn}
      {...props}
    />
    <span className={styles.placeholder}>{children}</span>
  </label>
);
Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;
