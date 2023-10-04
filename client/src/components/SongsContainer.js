import React from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import Wrapper from "../assets/wrapper/SongsContainer";
import PageBtnContainer from "./PageBtnContainer";
import Song from "./Song";
import { useSelector, useDispatch } from "react-redux";
import { getSongsBegin } from "../features/get/getSlice";
const SongsContainer = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    songs,
    page,
    totalSongs,
    search,
    searchGenre,
    sort,
    numOfPages,
  } = useSelector((state) => state.get);
  useEffect(() => {
    dispatch(getSongsBegin());
  }, [page, search, searchGenre, sort]);
  if (isLoading) {
    return <Loading center />;
  }
  if (songs.length === 0) {
    return (
      <Wrapper>
        <h2>no songs to be found</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalSongs} song{songs.length > 1 && "s"} found
      </h5>
      <div className="songs">
        {songs.map((song) => {
          return <Song key={song._id} {...song} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default SongsContainer;
