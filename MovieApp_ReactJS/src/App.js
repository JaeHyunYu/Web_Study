import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Detail from './routes/Detail'
import {
  BrowserRouter as Router,
  /* BroweRouter와 HashRouter 이렇게 두가지 종류가 잇는데
  url 차이임! 
  BrowseRouter는 우리가 보통 아는 url 같음
  HashRouter는 뒤에 #과 같은 걸 붙임 그차이일뿐임


  우리가 한페이지에서 다른 페이지로 이동할때 보통은 a tag를 이용해서
  다른 페이지로 이동했었음! -> 이거 적용됨
  하지만 a tag이용 시, 한페이지 전체를 reload함
  ReactJS같은 경우 이런걸 싫어함! 이걸위해 Link라는 컴포넌트가 있음
  Link는 브라우저가 새로고침 없이도 내가 원하는 곳 어디든 갈 수 있음! movie.js에서 보여줄거
  
  */
  Switch,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          {/* 이렇게 하면 id라는 property를 넘겨줄 수 있음! */}
          <Detail />
        </Route>

        <Route path="/">
          {/*누군가가 뒤에 /이렇게만 붙어있는 url로가면  Home route로 간다는 의미*/}
          <Home />
        </Route>
        {/* switch 는 route를 찾는애임  route는 뒤에 붙는 url을 의미함
      route를 찾으면 그 component를 render하게됨*/}
      </Switch >

    </Router>
  )

}

export default App;