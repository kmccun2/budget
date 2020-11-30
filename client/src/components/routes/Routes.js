import React, { Fragment } from 'react'
import MainPage from '../main/MainPage'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NotFound from '../misc/NotFound'
import Register from '../auth/Register'
import Login from '../auth/Login'
import PrivateRoute from '../routes/PrivateRoute'
import { loadUser, setAuthLoading } from '../../actions/auth'

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/dashboard' component={MainPage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
}

export default connect(null, {
  loadUser,
  setAuthLoading,
})(Routes)
