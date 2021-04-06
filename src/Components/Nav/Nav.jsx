import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

const Nav = () => {
  const nameUser = useSelector((state) => state.noteReducer.user);

  return (
    <div className={styles.container}>
      <h1>MAE Manager</h1>
      <div className={styles.user}>
        <b>{nameUser?.name}</b>
        <Link to="/tasks"> Tareas</Link>
        <Link to="/fondos">Administrador de Fondos</Link>
        <Link to="/"> Cerrar Sesion</Link>
      </div>
    </div>
  );
};
export default Nav;
