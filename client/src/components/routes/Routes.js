import React from 'react'
import MainPage from '../main/MainPage'
import { Switch, Route } from 'react-router-dom'
import NotFound from '../misc/NotFound'

const Routes = () => {
  return (
    <section className='content-body'>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
