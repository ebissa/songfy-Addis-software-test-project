import React from "react";
import Wrapper from "../assets/wrapper/Navbar";
import { FaUserCircle, FaAlignLeft, FaCaretDown } from "react-icons/fa";
// import { useAppContext } from "../context/appContext";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          // onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
