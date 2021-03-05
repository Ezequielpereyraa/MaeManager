import React from 'react';
import { useDispatch } from 'react-redux';

import { editTask, removeTask } from '../Redux/Actions';
import styles from './Task.module.scss';

const Task = ({
  _id,
  name,
  user,
  fecha,
  hora,
  description,
  fechaDeEntrega,
  status,
}) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  const handleClick = (id) => {
    console.log(!status, id);
    dispatch(editTask(id, !status));
  };

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundColor: status ? "#A3CFBB" : "#FFE69C" }}
        className={styles.card}
      >
        <div>
          <span>{user}</span>
          <time>
            {fecha} - {hora}
          </time>
          <div className={styles.buttons}>
            <button
              onClick={() => {
                handleRemove(_id);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <button
            onClick={() => handleClick(_id)}
            className={styles.status}
            style={{
              textDecoration: status ? "line-through" : null,
            }}
          >
            Estado: {status ? "Completada" : "Incompleta"}
          </button>

          <p className={styles.entrega}>
            {fechaDeEntrega ? "Fecha de Entrega: " + fechaDeEntrega : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
