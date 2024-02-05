import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import "./login.css"
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState([]);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);

    if (err.email === '' && err.password === '') {
      axios
        .post('http://localhost:8081/login', values)
        .then((res) => {
          if (res.data.errors) {
            setBackendError(res.data.errors);
          } else {
            setBackendError([]);
            if (res.data === 'Success') {
              navigate('/home');
            } else {
              alert('No record existed');
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h2>Sign-In</h2>

        {backendError.length > 0 &&
          backendError.map((e, index) => (
            <p key={index} className='error-message'>
              {e.msg}
            </p>
          ))}

        <form action='' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleInput}
              className='input-field'
            />
            {errors.email && <span className='error-message'> {errors.email}</span>}
          </div>

          <div className='form-group mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={handleInput}
              className='input-field'
            />
            {errors.password && <span className='error-message'> {errors.password}</span>}
          </div>

          <button type='submit' className='submit-button1'>
            Log in
          </button>

          <p className='myp'>You agree to our terms and policies</p>

          <Link to='/signup' className='create-account-link'>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
