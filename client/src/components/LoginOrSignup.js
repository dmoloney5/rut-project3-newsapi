import React from 'react'
import Login from './login'
import Signup from './Signup'

const LoginOrSignup = () => {
    return (
        <div className='login'>
          <Login />
          <Signup />
        </div>
    )
}

export default LoginOrSignup