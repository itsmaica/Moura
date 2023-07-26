import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <>
      <div className='div-background-img' id='loginform-container'>


        <form id='login-form' onSubmit={handleSubmit}>

          <div id='lf-header-and-tagline'>
            <h1 className='tile' id='lf-moura'>Moura</h1>
            <h3 id='lf-tagline'>A place to share knowledge and better understand the world of house plants</h3>
          </div>

          <div id='lf-input-container'>
            <p>Login</p>

            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Log In</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default LoginFormPage;
