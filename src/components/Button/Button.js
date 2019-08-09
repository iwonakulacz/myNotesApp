import React from "react";
import styles from "./Button.module.scss";

const Button = ({ addItemFn, href, children, oposite, ...props }) => {
  const buttonClass = oposite ? styles.buttonOposite : styles.button;
  return (
    <>
      {href ? (
        <a
          className={buttonClass}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <button className={buttonClass} {...props}>
          {children}
        </button>
      )}
    </>
  )
};

export default Button;