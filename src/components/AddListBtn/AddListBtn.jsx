import React, { useContext, useEffect, useState, useRef } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './AddListBtn.module.scss';


function AddListBtn(props) {

    const {
        openNew,
        active
    } = props;


    return (

        <button className={`${styles.addBtn} ${active ? '' : styles.inactive}`} onClick={openNew}>
            <span className={styles.addBtn__icon}></span>
            <span className={styles.addBtn__text}>добавить список</span>
        </button>


    );
}

export default AddListBtn;