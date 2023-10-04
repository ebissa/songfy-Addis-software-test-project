import React from "react";
import Wrapper from "../assets/wrapper/SongInfo";

const SongInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default SongInfo;
