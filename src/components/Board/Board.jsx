import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './Board.module.scss';

import BoardHeader from '../BoardHeader/BoardHeader';
import List from '../List/List';


function Board() {

    const dispatch = useDispatch();




    useEffect(() => {

        // fetchInfo();

    }, [])







    return (
        <section className={styles.board}>
            <BoardHeader />

            <div className={styles.board__list}>
                <List content={true}></List>
                <List content={false}></List>
            </div>

        </section>
    );
}

export default Board;

// Content