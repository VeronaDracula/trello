import React, { useContext, useEffect, useState, useRef } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './NewList.module.scss';


function NewList(props) {

    const {
        cancelNew,
        active
    } = props;


    return (

        <div className={`${styles.newList} ${active ? styles.active : ''}`}>
            <input className={styles.newList__input} placeholder="Ввести заголовок списка"></input>

            <div className={styles.newList__btns}>
                <button className={styles.newList__btnAdd}>Добавить список</button>
                <button className={styles.newList__btnCancel} onClick={cancelNew}>
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="091E42"></path>
                    </svg>
                </button>
            </div>
        </div>


    );
}

export default NewList;