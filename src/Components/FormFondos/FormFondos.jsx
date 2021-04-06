import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Fondo from '../Fondo';
import { addFondos } from '../Redux/Actions';
import styles from './FormFondos.module.scss';

const initialState = {
  nombre: "",
  monto: 0,
  medioDePago: "",
};

const Gastos = () => {
  const [fondos, setFondos] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFondos({
      ...fondos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFondos(fondos));
    setFondos(initialState);
  };

  return (
    <div className={styles.container}>
      <h1>Administrador de Fondos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre o titulo "
          value={fondos.nombre}
          name="nombre"
          onChange={handleChange}
        />
        <input
          name="monto"
          type="number"
          placeholder="Monto"
          value={fondos.monto}
          onChange={handleChange}
        />
        <label>
          <input
            type="radio"
            name="medioDePago"
            onChange={handleChange}
            value="Efectivo"
          />
          Efectivo
        </label>
        <label>
          <input
            type="radio"
            name="medioDePago"
            value="MercadoPago"
            onChange={handleChange}
          />{" "}
          Mercado Pago
        </label>
        <button>Agregar</button>
      </form>
      <Fondo />
    </div>
  );
};

export default Gastos;
