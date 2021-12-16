import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Detail from './routes/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/moviegg">
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