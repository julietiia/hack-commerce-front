import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { login } from '../redux/userSlice';


const LoginForm = () => {
  const [email, setEmail] = useState('user1@gmail.com');
  const [password, setPassword] = useState('1234');
  // const [checked, setChecked] = useState(false);
  const [error, setError] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_PORT_URL}/tokens`,
      data: {
        email,
        password,
      },
    });
    dispatch(login(response.data));
    navigate("#");
  } catch (error){
    setError("Incorrect email or password")
  }
  };


  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
     
     
      <button type="submit" className="col-12 btn btn-dark check-out-button rounded">
        Login 
      </button>
     
      
      <div className='mt-3 text-decoration-underline'>
       <Link to="/sign-up"> <p> or create a new account</p> </Link>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default LoginForm;