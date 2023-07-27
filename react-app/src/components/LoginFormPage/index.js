import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

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

  // Demo User Login
  const demoUser = (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";

    const data = dispatch(login(email, password));

    if (data) setErrors(data);
  };

  return (
    <>
      <div className="div-background-img" id="loginform-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <div id="lf-header-and-tagline">
            <h1 className="tile" id="lf-moura">
              Muora
            </h1>
            <h3 id="lf-tagline">
              A place to share knowledge and better understand the world of
              house plants
            </h3>
          </div>

          <div id="lf-input-container">
            <p>Login</p>

            <div id="lf-divider-line"></div>

            <ul className="errors">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>Email</label>
            <input
              placeholder="Your email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              placeholder="Your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div id="lf-button-cont">
              <button
                disabled={!password || !email}
                id="login-button"
                type="submit"
              >
                Login
              </button>
              {/* <button onClick={demoUser} id='demo-button'>Demo User</button> */}

              <button id="demo-button">Demo User</button>
            </div>
          </div>

          <div id="about-links-tech-footer">
            <div id="footer-class"></div>
            <p>Python</p>
            <span>·</span>
            <p>JavaScript</p>
            <span>·</span>
            <p>HTML</p>
            <span>·</span>
            <p>CSS</p>
            <span>·</span>
            <p>React</p>
            <span>·</span>
            <p>Redux</p>
            <span>·</span>
            <p>Flask</p>
            <span>·</span>
            <p>SQLalchemy</p>
            <span>·</span>
            <p>© Muora, Inc. 2023</p>
          </div>
        </form>

        {/* <div id="about-links">
          <p>Developed by Maica Santos</p>
          <span></span>
          <i class="fa-brands fa-linkedin"></i>
          <span></span>
          <i class="fa-brands fa-github"></i>
          <span></span>
          <i class="fa-brands fa-angellist"></i>
        </div> */}
      </div>
    </>
  );
}

export default LoginFormPage;
