import React, { Fragment } from 'react'
import Months from './components/main/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from '../src/components/routes/Routes'
import { Provider } from 'react-redux'
import store from './store'
import './my.scss'
import 'react-calendar/dist/Calendar.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className='my-container'>
            <Switch>
              <Route exact path='/' component={Months} />
              <Route component={Routes} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
