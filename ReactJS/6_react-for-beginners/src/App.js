import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  // useeffect를 이용하여 위에 코드가 처음 render때만 실행되도록 할것임!

  useEffect(() => {
    console.log("Call the Api...")
  }, []);
  // useEffect의 첫번째 인자는 처음 render될 때만 실행되도록 하는 코드!
  // 딱 한번만 실행되도록!

  /*
  useEffect
  - 두 개의 argument를 가지는 함수
  - 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
  - 두 번째는 [] 배열을 넣어줌
  -> useEffect가 컴포넌트의 첫 번째 렌더 시점에 iRunOnlyOnce 함수 호출
  그리고 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
  즉, 한번만 렌더링 됨
  단순화 하여 useEffect(() => {
    console.log("CALL THE API")
  },[]); 써도 됨
  */




  /*
  console.log("Search for", keyword);
  바로 위에 console.log같은 경우는 keyword로 검색할때만 로그를 남기고 싶어하는 경우!
  keyword를 입력하게되면 render되면서 위에 log가 뜨는 것은 좋음!(keyword가 변화될때)
  하지만 버튼을 클릭하게 되면 component자체가 render되면서 같이 또 뜨게됨..!(counter가 변화될때)
  */


  useEffect(() => {
    console.log("i run when 'keyword' changes");

  }, [keyword]);
  /* 이렇게 작성하면 keyword가 변화할때만 위에 코드가 실행되게 됨!
  즉 우리가 원할때(특정 state가 변화할때) 코드를 실행시킬 수 있음*/


  return (
    <div>
      <input value={keyword} type="text" onChange={onChange} placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button text={"Continue"} onClick={onClick}>click me</button>
    </div>
  );
}

// render할때 state가 변하면 해당 component의 코드는 모두 재실행이됨
// component가 처음 render될 때만 특정 코드가 실행되길 원할 수도 있음
// state가 변할때도 안바뀌도록!

export default App;
