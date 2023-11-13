import React, { useContext, useEffect, useState, useRef } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './Card.module.scss';


function Card(props) {

    // const {
    //     text
    // } = props;


    return (

        <li className={styles.card}>
            <button className={styles.card__edit}>
                <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82034 14.4893L9.94134 16.6103L18.4303 8.12131L16.3093 6.00031H16.3073L7.82034 14.4893ZM17.7233 4.58531L19.8443 6.70731C20.6253 7.48831 20.6253 8.7543 19.8443 9.53531L10.0873 19.2933L5.13734 14.3433L14.8943 4.58531C15.2853 4.19531 15.7973 4.00031 16.3093 4.00031C16.8203 4.00031 17.3323 4.19531 17.7233 4.58531ZM5.20094 20.4097C4.49794 20.5537 3.87694 19.9327 4.02094 19.2297L4.80094 15.4207L9.00994 19.6297L5.20094 20.4097Z" fill="091E42"></path>
                </svg>
            </button>

            <span className={styles.card__mark}></span>
            <p className={styles.card__text}>asaf</p>

            <div className={`${styles.card__check} ${styles.finish}`}>
                <span className={styles.card__checkIcon}></span>
                <p className={styles.card__checkText}>
                    <span>0</span>/<span>2</span>
                </p>
            </div>
        </li>


    );
}

export default Card;
