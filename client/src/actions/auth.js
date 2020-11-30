import axios from 'axios'
import { setAlert } from '../actions/alert'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ACCOUNT_DELETED,
  LOGOUT,
  CLEAR_PROFILE,
  SET_AUTH_LOADING,
  LOAD_PROFILE,
} from './types'
import setAuthToken from '../utils/setAuthToken'

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
    getCurrentProfile()
  }

  try {
    const res = await axios.get('/api/auth')
    let admin = false
    dispatch({
      type: USER_LOADED,
      payload: { user: res.data, admin: admin },
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

// Register User
export const register = ({ first_name, last_name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ first_name, last_name, email, password })

  try {
    const res = await axios.post('/api/users', body, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    })

    dispatch(loadUser())
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const formData = {
        first_name: first_name,
        last_name: last_name,
        team: undefined,
        dob: undefined,
        bats: undefined,
        throws: undefined,
        city: undefined,
        state: undefined,
        pripos: undefined,
        secpos: undefined,
        level: undefined,
        grad_year: undefined,
        act: undefined,
        commitment: undefined,
        facebook: undefined,
        instagram: undefined,
        twitter: undefined,
        mound_velo: null,
        run_and_gun: null,
        exit_velo: null,
        barrel_speed: null,
        fb_spin: null,
        cb_spin: null,
        sl_spin: null,
        sixty: null,
        body_fat: null,
        height: null,
        weight: null,
        rating: null,
        tbdl: null,
        db_bench: null,
        dw_pull_ups: null,
        front_squat: null,
      }
      // eslint-disable-next-line
      const res = await axios.post('/api/profile', formData, config)

      dispatch(getCurrentProfile())
    } catch (err) {
      const errors = err.response.data.errors
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
      }
    }
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: REGISTER_FAIL,
    })
  }
}

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post('/api/auth', body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(loadUser())
    dispatch(getCurrentProfile())
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE })
  dispatch({ type: LOGOUT })
}

// Set auth loading to true
export const setAuthLoading = () => (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING })
}

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    // eslint-disable-next-line
    const res = await axios.get('/api/profile/me')

    dispatch({ type: LOAD_PROFILE, payload: res.data })
  } catch (err) {}
}

// Update user's name
export const updateName = (formData, userid) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    // eslint-disable-next-line
    const res = await axios.put('/api/users/' + userid, formData, config)

    dispatch(loadUser())
    dispatch(getCurrentProfile())

    dispatch({
      type: LOAD_PROFILE,
    })
  } catch (err) {
    console.log(err)

    dispatch({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('/api/profile')

      dispatch({ type: ACCOUNT_DELETED })

      dispatch(setAlert('Your account has been permanantly deleted.'))
    } catch (err) {}
  }
}
