import React from "react";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";
import Input from "../Input/Input";


const Form = ({ ...props }) => (
  <>
    <div className={styles.wrapper}>
      <Title>add new item</Title>
      <form className={styles.form} onSubmit={props.onSubmitFn}>
        <div className={styles.radioWrapper}>
          <Radio name="note">note</Radio>
          <Radio name="article">article</Radio>
        </div>
        <Input name="title">Title</Input>
        <Input name="link">Link</Input>
        <Input name="description" textarea>
          Description
        </Input>
        <Button>add item</Button>
      </form>
    </div>
  </>
);

export default Form;
