import { combineReducers } from 'redux'
import cashFlow from './cashFlow'
import auth from './auth'
import profile from './profile'
import alert from './alert'

export default combineReducers({
  cashFlow,
  auth,
  profile,
  alert,
})
