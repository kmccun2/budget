import React, { useState, Fragment, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, setAuthLoading } from '../../actions/auth'
import Alert from '../misc/Alert'
import Spinner from '../misc/Spinner'

const Login = ({ login, isAuthenticated, setAuthLoading, loading }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated || true) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='login-container'>
      <Alert />
      <div className='login-window'>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className='logo'>
              My<span className='db'>Budget</span>
            </div>
            <div className='login-message'>Welcome! Login here</div>
            <p className='lead'></p>
            <form className='login-form' onSubmit={(e) => onSubmit(e)}>
              <input
                className='auth-input'
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
              <br></br>
              <input
                className='auth-input'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
              />
              <br></br>
              <input
                type='submit'
                className='auth-button'
                value='Login'
                // onClick={() => setAuthLoading()}
              />
            </form>
            <div className='sign-up'>
              Forgot password?
              <span className='sign-up-link'>
                <Link to='/register'> Recover here</Link>
              </span>
            </div>
            <div className='sign-up mt-70'>
              Don't have an account?
              <span className='sign-up-link'>
                <Link to='/register'> Sign Up</Link>
              </span>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, { login, setAuthLoading })(Login)
