import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './Content.module.scss';

import Menu from '../Menu/Menu';
import Board from '../Board/Board';


function Content() {

    const dispatch = useDispatch();






    useEffect(() => {

        // fetchInfo(); Board

    }, [])






    return (
        <section className={styles.content}>
            <Menu />
            <Board />
        </section>
    );
}

export default Content;

// Content