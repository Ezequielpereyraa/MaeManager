import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cleanMoney, getFondos } from '../Redux/Actions';
import styles from './Fondo.module.scss';

const Fondo = () => {
  const fondos = useSelector((state) => state.fondosReducer.fondos);
  const isLoding = useSelector((state) => state.noteReducer.isLoding);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFondos());
  }, [dispatch, isLoding]);

  let result;

  const mediosDePago = (string) => {
    if (fondos.length > 0) {
      result = fondos
        .filter((fondo) => fondo.medioDePago === `${string}`)
        .reduce((acc, num) => acc + parseInt(num.monto), 0);
      return result;
    }
  };
  const efectivo = mediosDePago("Efectivo");
  const mercadoPago = mediosDePago("MercadoPago");

  const handleClick = () => {
    dispatch(cleanMoney());
  };

  if (fondos?.length === 0) return <h1>Cargando ...</h1>;

  return (
    <div className={styles.container}>
      <h1>Lista de Fondos</h1>
      <ul>
        {fondos?.map(({ nombre, monto, medioDePago }, index) => (
          <li key={index}>
            {nombre} ${monto} - {medioDePago}
          </li>
        ))}
      </ul>
      <h3>Fondos Efectivo: ${efectivo} </h3>
      <h3>Fondos MercadoPago: ${mercadoPago}</h3>
      <button onClick={handleClick}>Limpiar Fondos</button>
    </div>
  );
};

export default Fondo;
