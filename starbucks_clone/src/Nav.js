import { useState } from 'react';

import { MdFormatIndentDecrease, MdLocationOn, MdPerson, MdSearch } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './css/Nav.module.css';
function Nav() {

    const lists = ['Sing in', 'My Starbucks', 'Customer Service & MdFormatIndentDecrease', 'Find a Store'];
    const lists2 = ['COFFEE', 'MENU', 'STORE', 'RESPONSIBILITY', 'STARBUCKS REWARDS', 'WHAT\'S NEW'];
    return (
        <div className={styles.wrap}>
            <a href="/" className={styles.logo}></a>

            <div className={styles.menus}>
                <div className={styles.wrap_inner1}>
                    <nav>
                        <ul className={styles.ul}>
                            {lists.map(lists => <li className={styles.list} key={lists.id}><a href={"#"}>{lists}</a></li>)}
                        </ul>
                        <p><a href="#"><MdSearch></MdSearch></a></p>
                    </nav>
                </div>
                <div className={styles.wrap_inner2}>
                    <nav>
                        <ul className={styles.ul}>
                            {lists2.map(lists => <li className={styles.list2}><a href={"#"}>{lists}</a></li>)}
                        </ul>
                    </nav>
                </div>



            </div>

            <div className={styles.icons}>
                <MdPerson />
                <MdLocationOn />
                <GiHamburgerMenu />

            </div>

            <div className={styles.test}>
                <ul>
                    <li>
                        test1
                    </li>
                    <li>
                        test2
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Nav;
