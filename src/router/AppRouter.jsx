import { Switch, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import ProcessList from '../pages/process/ProcessList'
import StartProcess from '../pages/process/StartProcess'

export default function AppRouter({ children }) {
  return (
    <Layout>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/process/start/:pid'>
          <StartProcess />
        </Route>
        <Route exact path='/process/list'>
          <ProcessList />
        </Route>
      </Switch>
    </Layout>
  )
}
