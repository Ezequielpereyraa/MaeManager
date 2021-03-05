import axios from 'axios';

import { ADD_TASK, CREATE_USER, EDIT_TASK, GET_TASKS, REMOVE_TASK } from '../Types';

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
    const response = await axios.put(`/task/${id}`, { status });
    dispatch({ type: EDIT_TASK, payload: response.data });
  };
};
