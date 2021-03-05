import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from '../Dashboard/Dashboard';
import Nav from '../Nav/Nav';
import { getTasks } from '../Redux/Actions';
import styles from './Home.module.scss';

const Home = () => {
  const [update, setUpdate] = useState(false);

  const loading = useSelector((state) => state.isLoding);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getTasks());
  }, [loading, dispatch]);

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main>
          <Dashboard setUpdate={setUpdate} update={update} />
        </main>
      </div>
    </>
  );
};

export default Home;
