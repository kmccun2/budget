import React, { Fragment, useEffect } from 'react'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from '../src/components/routes/Routes'
import { Provider } from 'react-redux'
import store from './store'
import './my.scss'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
  loadUser()
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className='my-container'>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route component={Routes} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
