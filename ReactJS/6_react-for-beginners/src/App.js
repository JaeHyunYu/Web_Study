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



    // ReactJS는 state값 변경할때 위에 보이는 거와 같이 두가지 방법으로 변경할 수 있음
    /*
    두번째로 보이는 값이 그냥 state modifier함수에 변경할 값을 바로 너어버리는 거

    첫번째로 보이는 값이 함수를 이용하는 것인데,
    함수를 이용해서 보낼때 reactjs는 함수의 첫번째 argument를 현재 State로 보냄(저 예시같은 경우는 currentArray)
    따라서 바로 바로 state값을 변경하거나 수정할때 편하게 사용가능 한거!
    그리고 현재 State를 계산하거나 새로운 State를만드는데 사용할 수 있게됨



    */
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

      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
        {/* map함수는 자바스크립트의 함수인데, 배열의 모든 요소들에 같은 옵션(함수)를 적용해주는 함수임
      그 옵션들이 적용된 후, 그 값이 새로운 array로 return되는 함수임!
      
      이걸 응용해서 toDos배열에 기존 toDos인자값들에 li씌운것을 인자로 바꿈으로써 list를 생성함!
      매우 신기함..*/}
      </ul>
    </div>)
}

export default App;