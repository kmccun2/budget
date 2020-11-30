import React, { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import Alert from '../misc/Alert'

const Register = ({ setAlert, register, isAuthenticated, profiles }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  })

  useEffect(() => {
    if (profiles.filter((profile) => profile.user.email === formData.email).length > 0) {
      setAlert('This email has already been used.', 'danger')
    }
  }, [formData, profiles, setAlert])

  const { first_name, last_name, email, password, password2 } = formData

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register({ first_name, last_name, email, password })
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard/feed' />
  }

  return (
    <Fragment>
      <Alert />
      <div className='login-window'>
        <div className='logo'>
          My<span className='db'>Budget</span>
        </div>
        <div className='sign-up-message'>Sign up for free!</div>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className='name'>
            <input className='auth-name' type='text' placeholder='First Name' name='first_name' value={first_name} onChange={(e) => onChange(e)} />
            <div className='space'></div>
            <input className='auth-name' type='text' placeholder='Last Name' name='last_name' value={last_name} onChange={(e) => onChange(e)} />
          </div>
          <input className='register-input' type='email' placeholder='Email' name='email' value={email} onChange={(e) => onChange(e)} />
          <br></br>
          <input className='register-input' type='password' placeholder='Password' name='password' value={password} onChange={(e) => onChange(e)} />
          <br></br>
          <input
            className='register-input'
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
          />
          <br></br>
          <input className='auth-button sign-up-button' type='submit' value='Sign Up' />
        </form>
        <div className='sign-up'>
          Already have an account?
          <span className='sign-up-link'>
            <Link to='/'> Sign In</Link>
          </span>
        </div>
      </div>
    </Fragment>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  profiles: state.profile.profiles,
})

export default connect(mapStateToProps, { setAlert, register })(Register)
