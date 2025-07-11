import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/SignUp";
import LadingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default routes */}
          <Route path="/" element={<LadingPage/>}/>
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/> */}
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep/>}/>
        </Routes>
      </Router>

      <Toaster>
        toastOptions={{
          className: '',
          style: {
            fontSize: '13px',
          },
        }}
      </Toaster>
    </div>
  )
}

export default App;