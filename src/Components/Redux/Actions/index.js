import axios from 'axios';

import { ADD_FONDOS, ADD_TASK, CLEAN_MONEY, CREATE_USER, EDIT_TASK, GET_FONDOS, GET_TASKS, REMOVE_TASK } from '../Types';

const fecha = new Date();

export const addUser = ({ name, email }) => ({
  type: CREATE_USER,
  payload: {
    name,
    email,
  },
});

export const getTasks = () => {
  return async function (dispatch) {
    const { data } = await axios.get("/task");
    return dispatch({ type: GET_TASKS, payload: data });
  };
};

export const addTask = ({ name, description }, user, fechaDeEntrega) => {
  return async (dispatch) => {
    const { data } = axios.post("/task", {
      name,
      description,
      user,
      fechaDeEntrega: fechaDeEntrega?.toLocaleDateString(),
      fecha: fecha.toLocaleDateString(),
      hora: fecha.toTimeString().split(" ")[0],
    });
    dispatch({ type: ADD_TASK, payload: data });
    // user,
    // name: task.name,
    // description: task.description,
  };
};

export const removeTask = (id) => {
  return async (dispatch) => {
    axios.delete(`/task/${id}`);
    dispatch({ type: REMOVE_TASK, payload: id });
  };
};

export const editTask = (id, status) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/task/${id}`, { status });
    dispatch({ type: EDIT_TASK, payload: data });
  };
};

export const addFondos = ({ nombre, monto, medioDePago }) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/fondos`, {
      nombre,
      medioDePago,
      monto: parseInt(monto),
    });
    dispatch({ type: ADD_FONDOS, payload: data });
  };
};

export const getFondos = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`/fondos`);
    dispatch({ type: GET_FONDOS, payload: data });
  };
};

export const cleanMoney = () => {
  return (dispatch) => {
    dispatch({ type: CLEAN_MONEY });
  };
};
