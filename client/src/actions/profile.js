import axios from 'axios'
import { setAlert } from '../actions/alert'

import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, CLEAR_PROFILE } from './types'

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me')

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Create or update profile
export const updateProfile = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios.post('/api/profile', formData, config)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    })

    console.log(formData)

    // // Grab profile after updating
    // dispatch(getProfileById(formData))

    dispatch(setAlert('Profile updated!', 'success'))
  } catch (err) {
    console.log(err)

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Clear profile from state
export const clearProfile = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_PROFILE })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
