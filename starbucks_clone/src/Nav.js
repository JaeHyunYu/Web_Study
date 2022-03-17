import { useState } from 'react';

import { MdFormatIndentDecrease, MdLocationOn, MdPerson, MdSearch } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './css/Nav.module.css';
function Nav() {

    const lists = ['Sing in', 'My Starbucks', 'Customer Service & MdFormatIndentDecrease', 'Find a Store'];
    return (
        <div className={styles.wrap}>
            <div className={styles.menus}>
                <div className={styles.wrap_inner1}>
                    <nav >
                        <ul className={styles.ul}>
                            {lists.map(lists => <li className={styles.list}><a href={"#"}>{lists}</a></li>)}
                        </ul>
                        <p><a href="#"><MdSearch></MdSearch></a></p>
                    </nav>
                </div>
                <div className={styles.wrap_inner2}>
                </div>

            </div>
            <a href="/" className={styles.logo}></a>

            <div className={styles.icons}>
                <MdPerson />
                <MdLocationOn />
                <GiHamburgerMenu />

            </div>

        </div >
    );
}

export default Nav;
