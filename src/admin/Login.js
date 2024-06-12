import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if(response.status == true){
        navigate('/admin/dashboard');
    }else{
        navigate('/login'); 
    }
  },[response]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const fetch = async () => {
    let credentials = {
      username: email,
      password: password,
    };
    try {
      axios
        .post("http://127.0.0.1:3000/api/auth", credentials)
        .then((res) => setResponse(res.data));
    } catch (error) {
      console.log(error, "Something went wrong");
    }
  };

  return (
    <div className="container pt-3 mt-3 d-flex flex-column align-items-center">
      <h2 className="text-center">Login Page</h2>
      <form className="w-50">
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="email_address">
            Email address
          </label>
          <input
            type="email"
            id="email_address"
            className="form-control"
            placeholder="Username or Email"
            name="email"
            onChange={handleEmailChange}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
          />
        </div>

        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block mb-4"
          onClick={fetch}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
