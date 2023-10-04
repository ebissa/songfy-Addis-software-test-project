import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrapper/LandingPage";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Song <span>tracking</span> app
          </h1>
          <p>
            Introducing Songify: Your Ultimate Music Companion! Whether you're a
            music enthusiast or simply want a better way to manage your songs,
            Songify is your go-to solution. Enjoy seamless organization and
            exploration of your favorite tracks with us. Welcome to the world of
            melodies!
          </p>
          <Link to="/main/add-song" className="btn btn-hero">
            main page
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
