import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // 자동으로 설정된 설정(form안에 button있으면 submit로 받아들여져서 페이지가 새로고침 된다거나!)
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);

    // javascript 배열 새로 선언(기존의 배열에 추가적으로 뭘 넣고싶다든가할때)
    // [6,arrayA] 이렇게되면 인자값이 6과 arrayA의 인자값들이 아닌 6과 배열arrayA이렇게 두개가됨
    // arrayA의 인자값들까지포함시키려면 [6,...arrayA] 이런식으로 작성해줘야 배열의 인자값들을 의미
    setTodo("");
    //기존의 자바스크립트 같은 경우는 배열에 값너허줄때 toDos.push()이런식으로 넣어줬었음
    // 하지만 state값은 function을 이용해서 변경해줘야함! 절대 state를 직접적으로 수정하지 않음!

  };
  console.log(toDos);
  return (
    <div>
      <h1> My toDos {toDos.length}</h1>
      <form onSubmit={onSubmit}>

        <input onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button >Add To Do</button>
        {/* 기존의 JS같은 경우는 form안에 button있으면
      submit자동으로 들어가짐!*/}
      </form>
    </div>)
}

export default App;