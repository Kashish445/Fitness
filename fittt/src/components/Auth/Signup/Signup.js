import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
import './signup.css'
function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);

    if (err.name === '' && err.email === '' && err.password === '') {
      axios
        .post('http://localhost:8081/signup', values)
        .then((res) => {
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='signup-container'>
    <div className='signup-form'>
      <h2>Sign-Up</h2>
      <form action='' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name' className='label'>
            <strong>Name</strong>
          </label>
          <input
            type='text'
            placeholder='Enter Name'
            name='name'
            onChange={handleInput}
            className='input-field'
          />
          {errors.name && <span className='error-message'> {errors.name}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='email' className='label'>
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

        <div className='form-group'>
          <label htmlFor='password' className='label'>
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

        <button type='submit' className='submit-button2'>
          Sign up
        </button>

        <p className='myp'>You agree to our terms and policies</p>

        <Link to='/' className='login-link'>
          Login
        </Link>
      </form>
    </div>
  </div>
  );
}

export default Signup;
