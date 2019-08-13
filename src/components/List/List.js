import React from "react";
import styles from "./List.module.scss";
import ListItem from "./ListItem";

const List = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <ListItem
        type={item.type}
        title={item.title}
        link={item.link}
        description={item.description}
        key={item.title}
      />
    ))}
  </ul>
);

export default List;
