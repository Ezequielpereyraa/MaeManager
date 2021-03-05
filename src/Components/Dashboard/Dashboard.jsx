import React from 'react';

import Tasks from '../Tasks';
import styles from './Dashboard.module.scss';

const Dashboard = ({ setUpdate, update }) => {
  return (
    <div className={styles.container}>
      <Tasks setUpdate={setUpdate} update={update} />
    </div>
  );
};

export default Dashboard;
