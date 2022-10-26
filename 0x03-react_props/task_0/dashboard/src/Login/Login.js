import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <form>
        <label> Email: &nbsp;
          <input required type='text' placeholder='email' />
        </label>
        <label> Password: &nbsp;
          <input required type='text' placeholder='password' />
        </label>
        <button type='submit'>OK</button>
      </form>
    </div>
  );
};

export default Login;
