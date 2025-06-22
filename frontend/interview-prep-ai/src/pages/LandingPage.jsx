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
    <div className="">
      <div className=""/>
        <div className="">
          {/* Header */}
          <header className="">
            <div className="">
              Interview Prep AI
            </div>
            <button className="" onClick={() => setOpenAuthModal(true)}>
              Login / SignUp
            </button>
          </header>
          {/* Hero Content */}
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  AI Powered
                </div>
              </div>
              <h1 className="">
                Ace Interview with <br/>
                <span className="">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="">
              <p className="">
                Get role specifi questions, expand answers when you need them,
                dive deeper into concepts, and organize everything in you way.
                From preparation from to mastery - your ultimate interview toolkit
                is here.
              </p>
              <button className="" onClick={handleCTA}>
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LandingPage;