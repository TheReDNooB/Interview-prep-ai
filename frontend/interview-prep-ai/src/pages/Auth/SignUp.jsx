import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../../components/Inputs/Input'

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // handle sigup form submit
  const handleSignUp = async (e) => {
    e.preventDefault();
  }

  return <div className="">
    <h3 className="">Create an Account</h3>
    <p className="">
      Join us today by entering your details below
    </p>

    <form onSubmit={handleSignUp}>
      <div className="">
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Fullname"
          placeholder="Steve"
          type="text"
        />
        <Input
          value={Email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="hello@example.com"
          type="text"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />
      </div>

      {error && <p className="">{error}</p>}
      <button type="" className="">
        Sign Up
      </button>
      <p className="">
        Already an Account?{" "}
        <button 
          className=""
          onClick={() => {
            setCurrentPage("login");
          }}>
          Login
        </button>
      </p>
    </form>

  </div>

};

export default SignUp;