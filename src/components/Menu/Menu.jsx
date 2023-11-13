import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './Menu.module.scss';


function Menu(props) {

    const {

    } = props;

    const dispatch = useDispatch();

    const [menuOpen, setMenuOpen] = useState(true);


    function hideMenu() {
        if (menuOpen === false) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }




    useEffect(() => {

        // fetchInfo();

    }, [])







    return (
        <section className={`${styles.menu} ${!menuOpen ? styles.close : ''}`}>
            <button className={styles.menu__hideBtnClose} onClick={hideMenu}></button>
            <div className={styles.menu__info}>
                <p className={styles.menu__name}>name</p>
                <button className={styles.menu__hideBtn} onClick={hideMenu}></button>
            </div>

            <div className={styles.myBoards}>
                <h2 className={styles.myBoards__title}>Мои доски</h2>
                <ul className={styles.myBoards__list}>
                    <li className={styles.myBoards__item}>
                        desk
                    </li>
                    <li className={styles.myBoards__item}>
                        Lorem ipsum dolor sit amet consectetur
                    </li>
                </ul>

            </div>


        </section>
    );
}

export default Menu;

// Content