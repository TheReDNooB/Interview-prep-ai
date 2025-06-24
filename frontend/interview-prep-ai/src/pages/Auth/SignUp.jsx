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

  return <div>SignUp</div>

};

export default SignUp;