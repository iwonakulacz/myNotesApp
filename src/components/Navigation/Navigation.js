import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
const Nav = ({ openModalFn }) => (
  <>
    <nav className={styles.nav}>
      <h1 className={styles.title}>my notes</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            activeClassName={styles.linkActive}
            className={styles.link}
            to="/"
          >
            notes
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            activeClassName={styles.linkActive}
            className={styles.link}
            to="/articles"
          >
            articles
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className={styles.headerWrapper}>
      <Button oposite onClick={openModalFn}>add new item</Button>
    </div>
  </>
);

export default Nav;
