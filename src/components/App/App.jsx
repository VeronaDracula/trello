import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './App.module.scss';

import Content from '../Content/Content';







function App() {

  const dispatch = useDispatch();




  // const fetchInfo = async () => {
  //   try {
  //     await dispatch(getInfo());

  //   } catch (error) {
  //     console.log('error\n', error); Card
  //   }
  // };


  useEffect(() => {

    // fetchInfo(); Menu

  }, [])







  return (
    <section className={styles.app}>
      <Content />

    </section>
  );
}

export default App;

// Content