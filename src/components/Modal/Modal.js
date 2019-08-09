import React from "react";
import Form from "../Form/Form";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <div className={styles.modal}>
      <Button className={styles.closeModal} onClick={closeModalFn} />
      <Form />
    </div>
  </div>
);

export default Modal;
