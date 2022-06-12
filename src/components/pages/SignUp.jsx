import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import "./SignUpStyle.css";

const SignUp = () => {
  // useState [pass,email,error]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {createUser} = UserAuth()
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
        await createUser(email, password)
        navigate('/account')
       

    } catch (e){
        setError(e.message)
    }
  };

  return (
    <>
      <div className="signup-container">
        <img
          className="signUp-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/24b89ef5-bfb1-4dd0-b4a1-1633e1caf195/MA-fr-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
      </div>
      <div className="signUp-info">
        <h1 className="sign-up-title">Sign Up</h1>
        {error ? <p className="error"> {error} </p>: null}
        

        <form className="form" onSubmit={handelSubmit}>
          <input
            className="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="pass"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="signUp-btn">Sing Up</button>
          <div className="done">
            <p className="remember">
              <input type={"checkbox"} /> Remember Me
            </p>
            <p className="help">Need Help?</p>
          </div>
          <p style={{ color: "#b3b3b3", fontFamily: "Verdana" }}>
            Already have an account,
            <Link to="/signIn">
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingLeft: "2px",
                }}
              >
                Sign In.
              </span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
