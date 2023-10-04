import React from "react";
import Wrapper from "../../assets/wrapper/SharedLayout";
import { Outlet, Link } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";

const Sharedlayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Sharedlayout;
