import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'

export default function AppRouter({children}) {

    return (
      <Router>
        <Router>
          <Switch>
            <Route path='/login' >
              <Login />
            </Route>
            <Route path='/' >
              <Home />
            </Route>
          </Switch>
        </Router>
      </Router>
    )
}
