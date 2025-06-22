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
    <div className="w-full min-h-full bg-[#fffcef]">
      <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0"/>
        <div className="container mx-auto px-4 pt-6 pb-[200] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">
              Interview Prep AI
            </div>
            <button className="bg-linear-to-r from-[#ff9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer" 
              onClick={() => setOpenAuthModal(true)}>
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