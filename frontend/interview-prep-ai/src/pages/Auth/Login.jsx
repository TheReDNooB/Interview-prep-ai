import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return <div className="">
    <h3 className="">Welcome back</h3>
    <p className=""> Please enter your details to log in</p>

    <form onSubmit={handleLogin}>
      
    </form>
  </div>
};

export default Login;