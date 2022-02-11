import styles from './css/Notice.module.css';
import { IoIosArrowDropdown } from 'react-icons/io';
import { BsPlusCircle } from 'react-icons/bs';

function Notice_sec() {
    return (
        <div className={styles.wrap}>


            <div className={styles.section1}>
                <div className={styles.notice_div}>
                    <p className={styles.section_font} style={{ color: 'white' }}>공지사항</p>
                    <p className={styles.section_carousel}>시스템 개선 및 점검 안내</p>
                </div>
                <BsPlusCircle className={styles.icon} style={{ color: 'white' }} />
            </div>
            <div className={styles.section2}>
                <p className={styles.section_font}>스타벅스 프로모션</p>
                <IoIosArrowDropdown classNanpmme={styles.icon} />
            </div>

        </div >
    );
}

export default Notice_sec;