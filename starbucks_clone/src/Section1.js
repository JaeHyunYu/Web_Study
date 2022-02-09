import styles from './css/Section1.module.css';
function Section1() {
    return (
        <div className={styles.wrap}>
            <img className={styles.title} src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_main_slogan.png"></img>
            <img className={styles.drink1} src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_latte.png"></img>
            <img className={styles.drink2} src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_drink_2.png"></img>
            <img className={styles.drink3} src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_frappuccino_0203.png"></img>


        </div >
    );
}

export default Section1;