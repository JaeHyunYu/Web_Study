import Button from "./Button"
import styles from "./App.module.css"
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("rener");
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button text={"Continue"} onClick={onClick}>click me</button>
    </div>
  );
}

// render할때 state가 변하면 해당 component의 코드는 모두 재실행이됨
// component가 처음 render될 때만 특정 코드가 실행되길 원할 수도 있음
// state가 변할때도 안바뀌도록!

export default App;
