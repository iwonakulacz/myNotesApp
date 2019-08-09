import React from 'react';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({...props}) => (
    <li className={styles.item}>
      <Title>{props.title}</Title>
      <p className={styles.description}>{props.description}</p>
      <Button href={props.link}>read it</Button>
    </li>
)

export default ListItem;