import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      email,
      password,
      checked,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {/* <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div> */}
      <button type="submit" className="addtocart-button rounded btn btn-dark text-select">
        login
      </button>
    </form>
  );
};

export default LoginForm;