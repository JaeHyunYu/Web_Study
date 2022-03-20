import { useState } from 'react';

import { MdFormatIndentDecrease, MdLocationOn, MdPerson, MdSearch } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './css/Nav.module.css';
function Nav() {

    const lists = ['Sign in', 'My Starbucks', 'Customer Service & MdFormatIndentDecrease', 'Find a Store'];
    const lists2 = ['COFFEE', 'MENU', 'STORE', 'RESPONSIBILITY', 'STARBUCKS REWARDS', 'WHAT\'S NEW'];

    return (
        <div className={styles.wrap}>
            <a href="/" className={styles.logo}></a>

            <div className={styles.menus}>
                <div className={styles.wrap_inner1}>
                    <nav>
                        <ul>
                            <input type="checkbox" id="search" className={styles.search}></input>
                            <label htmlFor="search" className={styles.search1}><MdSearch></MdSearch></label>
                            {lists.map(lists => <li className={styles.list} key={lists.id}><a href={"#"}>{lists}</a></li>)}


                        </ul>

                    </nav>
                </div>
                <div className={styles.wrap_inner2}>
                    <nav>
                        <ul>
                            {lists2.map(lists =>
                                <div className={styles.list2}>
                                    <li><a href={"#"}>{lists}</a>
                                        <div className={styles.dropdown}>
                                            <div className={styles.dropdown_content}>
                                                <ul className={styles.dropdown_items}>
                                                    <li>
                                                        커피
                                                    </li>
                                                    <li>
                                                        스타벅스 원두
                                                    </li>
                                                    <li>
                                                        스타벅스 비아
                                                    </li>
                                                    <li>
                                                        스타벅스앳홈 by 캡슐
                                                    </li>
                                                </ul>
                                                <ul className={styles.dropdown_items}>
                                                    <li>나와 어울리는 커피</li>
                                                </ul>
                                                <ul className={styles.dropdown_items}>
                                                    <li>스타벅스 리저브™</li>
                                                    <li>RESERVE MAGAZINE</li>
                                                </ul>
                                                <ul className={styles.dropdown_items}>
                                                    <li>에스프레소 음료</li>
                                                    <li>도피오</li>
                                                    <li>에스프레소 마키아또</li>
                                                    <li>아메리카노</li>
                                                    <li>마키아또</li>
                                                    <li>카푸치노</li>
                                                    <li>라떼</li>
                                                    <li>모카</li>
                                                </ul>
                                                <ul className={styles.dropdown_items}>
                                                    <li>최상의 커피를 즐기는 법</li>
                                                    <li>커피 프레스</li>
                                                    <li>아이스 푸어 오버</li>
                                                    <li>커피 메이커</li>
                                                    <li>리저브를 매장에서 다양하게 즐기는 법</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </nav>
                </div>
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
