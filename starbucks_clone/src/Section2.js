import styles from './css/Section2.module.css';

function Section2() {
    return (
        <div className={styles.wrap}>

            <div className={styles.section1}>
                <img className={styles.logo} src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"></img>
            </div>

            <div className={styles.section2}>

                <div className={styles.info_con}>
                    <h2>스타벅스만의 특별한 혜택,<br></br><strong>스타벅스 리워드</strong></h2>
                    <p>
                        <strong>스타벅스 회원이세요?</strong>
                        로그인을 통해<br></br>
                        나만의 리워드를 확인해보세요.<br></br>

                        <strong>스타벅스 회원이 아니세요?</strong><br></br>
                        가입을 통해 리워드 혜택을 즐기세요.
                    </p>

                    <div>
                        <button className={styles.button1}>회원가입</button>

                        <button className={styles.button2}>로그인</button>
                    </div>

                </div>
                <hr className={styles.line}></hr>
                <div className={styles.gift_con}>
                    <p>
                        회원 가입 후, 스타벅스 e-Gift Card를<br></br>
                        <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong>
                        카드를 등록하여 스타벅스 리워드 회원이 되신 후,
                        첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                    </p>

                    <button className={styles.button2}>e-Gift Card 선물하기</button>

                </div>
            </div>

        </div >
    );
}

export default Section2;