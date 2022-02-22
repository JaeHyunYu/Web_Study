import { useState } from 'react';

import { MdFormatIndentDecrease, MdLocationOn, MdPerson } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './css/Nav.module.css';
function Nav() {

    const lists = ['Sing in', 'My Starbucks', 'Customer Service & MdFormatIndentDecrease', 'Find a Store'];
    return (
        <div className={styles.wrap}>

            <nav>
                <ul>
                    {lists.map(lists => <li className={styles.list}>{lists}</li>)}
                </ul>
            </nav>

            <a href="/" className={styles.logo}></a>
            <div className={styles.wrap_inner}>
            </div>
            <div className={styles.icons}>
                <MdPerson />
                <MdLocationOn />
                <GiHamburgerMenu />

            </div>

        </div >
    );
}

export default Nav;
