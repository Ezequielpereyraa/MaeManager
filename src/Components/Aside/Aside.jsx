import React from "react";
import { Link } from "react-router-dom";

import styles from "./Aside.module.scss";

const Aside = () => (
  <div className={styles.container}>
    <h1>Menu</h1>
    <Link to="/home/addTask">Tares</Link>
  </div>
);

export default Aside;
