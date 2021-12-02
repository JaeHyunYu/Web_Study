import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
    return <button className={styles.btn}>{text}</button>;
    // 위에 방식대로 css를 import할 수도 있음
    // 해당방식은 create-react-app이 css파일을 javascript 오브젝트로 변환시켜서 설정되어지는 것임
    // css style들이 모듈화 된다는 것이 장점
    // create-react-app은 해당 스타일에 랜덤 클래스명을 할당하여 설정되어짐
    // 즉 css파일을 쓰고나서 javascript 오브젝트로 가져오기 때문에 편하게 컴포넌트를 분리해서 작성할 수 있다는 거!
    // 왜 장점이냐면 각 모듈끼리 같은 이름의 클래스명을 가지고 있다하더라도 가져올때는 랜덤한 이름으로 가져오기 떄문에 안겹치고 좋다라는 의미

    /* button태그에  이런식으로 css만들어도됨
    style={{
        backgroundColor: "tomato",
        color: "white",
        
    }}
    */

}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
// Button 밖에서 import 할 수 있도록 해주는 코드