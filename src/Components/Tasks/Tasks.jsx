import 'react-calendar/dist/Calendar.css';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';

import { addTask, getTasks } from '../Redux/Actions';
import Task from '../Task';
import styles from './Tasks.module.scss';

const initialState = {
  name: "",
  description: "",
};

const Tasks = ({ setUpdate, update }) => {
  const [dataInputTask, setDataInputTask] = useState(initialState);
  const [dateToSend, setDateToSend] = useState();

  const user = useSelector((state) => state.noteReducer.user);
  const tasks = useSelector((state) => state.noteReducer.tasks);
  const dispatch = useDispatch();
  const { name, description } = dataInputTask;

  const handleChange = (e) => {
    setDataInputTask({
      ...dataInputTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(dataInputTask, user?.name, dateToSend));
    dispatch(getTasks());
    setDataInputTask(initialState);
  };

  const onChange = (date) => {
    setDateToSend(date);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Tareas </h1>
        <h5>
          *El Campo de nombre es el unico obligatorio, los otro solamente si es
          necesario
        </h5>
        <input
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Nombre de la tarea"
          type="text"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Agregar Descripcion solo si lo necesita"
          cols="30"
          rows="3"
        ></textarea>

        <Calendar
          className={styles.reactCalendar}
          showWeekNumbers
          onChange={onChange}
        />

        <button className={styles.addTask} type="submit">
          Agregar
        </button>
      </form>
      <section className={styles.taks}>
        {tasks?.length <= 0 ? (
          <h1>No hay Tareas</h1>
        ) : (
          tasks?.map((task, index) => <Task key={index} {...task} />)
        )}
      </section>
    </div>
  );
};

export default Tasks;
