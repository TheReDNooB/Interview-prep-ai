import React, { useState } from "react";

import HERO_IMG from "../assets/hero-test.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const handleCTA = () => {};

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage;