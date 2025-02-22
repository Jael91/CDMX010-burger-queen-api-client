import React from 'react';
import { useState } from "react";
import { Redirect } from "react-router"

import { auth } from '../../firebase';

import logo from '../../assets/logo-burgerqueen.png';

import './Login.css';

const initialInputs = {
  email: '',
  password:''
}

const Login = (props) => {

  const [inputs, setInputs] = useState(initialInputs)

  function handleOnChange(e) {
    const {id, value} = e.target
    const newValue = {...inputs, [id]:value}
    setInputs(newValue)
  }

  function handleSubmit(e) {
    e.preventDefault()
    auth.signInWithEmailAndPassword(inputs.email, inputs.password)
  }

  if (props.user) {
    return <Redirect to="/dashboard-waiter" />
  }

  return (
    <div className='login-container'>
      <div className='logo-welcome'>
          <img src={logo} className='burgerqueen-logo' alt='logo' />
          <h2>¡Bienvenidxs!</h2>
      </div>
      <div className='form-container'>
        <form className='formLogin' onSubmit={handleSubmit}>
            <input id='email' type='email' className='inputLogin' value={inputs.email} onChange={handleOnChange} placeholder="miri@queen.com"></input>
            <input id='password' className='inputLogin' type='password' value={inputs.password} onChange={handleOnChange} placeholder="********"></input>
            <button type="submit" value="Log in" className='Welcome'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
};

export default Login;
