import { takeEvery, put, select } from "redux-saga/effects";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { clearAlert, getSongsSuccess } from "./getSlice";

function* getSongs(action) {
  try {
    const { page, search, searchGenre, sort } = yield select(
      (state) => state.get
    );
    let url = `http://localhost:5000/api/v1/songs?page=${page}&genre=${searchGenre}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    const response = yield axios.get(url);
    const { songs, totalSongs, numOfPages } = response.data;

    yield put(
      getSongsSuccess({
        songs,
        totalSongs,
        numOfPages,
      })
    );
  } catch (error) {
    return <Navigate to="/" />;
  }
  yield put(clearAlert());
}

function* getSaga() {
  yield takeEvery("get/getSongsBegin", getSongs);
}

export default getSaga;
