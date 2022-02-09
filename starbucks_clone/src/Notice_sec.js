import styles from './css/Notice.module.css';
import { IoIosArrowDropdown } from 'react-icons/io';
import { BsPlusCircle } from 'react-icons/bs';

function Notice_sec() {
    return (
        <div className={styles.wrap}>


            <div className={styles.section1}>
                <p className={styles.section_font} style={{ color: 'white' }}>공지사항</p>
                <BsPlusCircle className={styles.icon} style={{ color: 'white' }} />
            </div>
            <div className={styles.section2}>
                <p className={styles.section_font}>스타벅스 프로모션</p>
                <IoIosArrowDropdown className={styles.icon} />
            </div>

        </div >
    );
}

export default Notice_sec;