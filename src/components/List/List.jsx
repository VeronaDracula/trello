import React, { useContext, useEffect, useState, useRef } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './List.module.scss';

import AddListBtn from '../AddListBtn/AddListBtn';
import NewList from '../NewList/NewList';
import Card from '../Card/Card';


function List(props) {

    const {
        content
    } = props;

    const [newBtnView, setNewBtnView] = useState(true);
    const [newListOpen, setNewListOpen] = useState(false);


    useEffect(() => {
        setNewBtnView(!content);
    }, [content])



    function openNewForm() {
        setNewListOpen(true);
        setNewBtnView(false);
    }

    function closeNewForm() {
        setNewListOpen(false);
        setNewBtnView(true);
    }


    return (

        <div className={styles.list}>
            <AddListBtn openNew={openNewForm} active={newBtnView} />
            <NewList cancelNew={closeNewForm} active={newListOpen} />

            <div className={`${styles.list__container} ${content ? styles.active : ''}`}>
                <div className={styles.list__header}>
                    <h2 className={styles.list__title}>title</h2>
                </div>
                <ul className={styles.cards}>
                    <Card />
                </ul>

                <button className={styles.list__add}>
                    <span className={styles.list__addIcon}></span>
                    <span className={styles.list__addText}>добавить список</span>
                </button>
            </div>
        </div>
    );
}

export default List;