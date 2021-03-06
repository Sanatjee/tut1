import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import styles from "./header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
