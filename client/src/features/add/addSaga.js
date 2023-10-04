import { takeEvery, put, select, delay } from "redux-saga/effects";
import { getSongsBegin } from "../get/getSlice";
import axios from "axios";
import {
  displayAlert,
  ClearAlert,
  createSongSuccess,
  createSongError,
  clearValues,
  editSongSuccess,
  editSongError,
  deleteSongSuccess,
} from "./addSlice";
import { Navigate } from "react-router-dom";

function* addSong(action) {
  try {
    // Select the title and genre from the state
    const { title, genre } = yield select((state) => state.add);

    // Send the API request with the selected title and genre
    yield axios.post("http://localhost:5000/api/v1/songs", {
      title: title,
      genre: genre,
    });
    yield put(createSongSuccess());
    yield put(clearValues());
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error if needed
    } else {
      console.log(error);
      yield put(createSongError({ message: error.response.data.msg }));
      yield put(displayAlert());
    }
  }
  yield delay(2000);
  yield put(ClearAlert());
}

function* editSong(action) {
  try {
    const { title, genre, editSongId } = yield select((state) => state.add);

    yield axios.patch(`http://localhost:5000/api/v1/songs/${editSongId}`, {
      title: title,
      genre: genre,
    });
    yield put(editSongSuccess());
    yield put(clearValues());
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error if needed
    } else {
      console.log(error);
      yield put(editSongError({ message: error.response.data.msg }));
      yield put(displayAlert());
    }
  }
  yield delay(2000);
  yield put(ClearAlert());
}
function* deleteSong(action) {
  try {
    const { deleteSongId } = yield select((state) => state.add);
    console.log(deleteSongId);
    yield axios.delete(`http://localhost:5000/api/v1/songs/${deleteSongId}`);
    yield put(deleteSongSuccess());
    yield put(getSongsBegin());
  } catch (error) {
    console.log(error);
  }
}
function* addSaga() {
  yield takeEvery("add/createSongBegin", addSong);
}
function* deleteSaga() {
  yield takeEvery("add/deleteSongBegin", deleteSong);
}

function* editSaga() {
  yield takeEvery("add/editSongBegin", editSong);
}

export { addSaga, editSaga, deleteSaga };
