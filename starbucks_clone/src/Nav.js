import { MdCoffeeMaker, MdLocationOn, MdPerson } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Nav.module.css';
function Nav() {
    return (
        <div className={styles.wrap}>
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
