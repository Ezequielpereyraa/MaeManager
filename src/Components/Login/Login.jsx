import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addUser } from '../Redux/Actions';
import styles from './Login.module.scss';

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const users = ["Aylen", "Eze", "Maxi"];
    const pass = ["nena2019", "ezequiel24", "eferitox"];
    if (users.includes(data.name) && pass.includes(data.password)) {
      dispatch(addUser(data));
      history.push("/home");
    } else {
      alert("No eres Usuario");
    }
  };

  return (
    <div className={styles.container}>
      <h1>MAE Manager</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Iniciar Sesion</h3>
        <input
          placeholder="Nombre"
          name="name"
          ref={register({ required: true })}
        />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          ref={register({ required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.name || errors.password ? (
          <span className={styles.error}>Estos campos son requeridos</span>
        ) : null}

        <input type="submit" value="Ingresar" />
      </form>
    </div>
  );
};

export default Login;
