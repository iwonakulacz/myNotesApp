import React from "react";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";
import AppContext from "../../context";

const ListItem = ({ ...props }) => (
  <AppContext.Consumer>
    {context => (
      <li className={styles.item}>
        <Title>{props.title}</Title>
        <button className={styles.removeButton} onClick={() => context.removeItem(props)}>
          <i className="fa fa-trash"/>
        </button>
        <p className={styles.description}>{props.description}</p>
        {props.link.length > 0 && <Button href={props.link}>read it</Button>}
      </li>
    )}
  </AppContext.Consumer>
);

export default ListItem;
