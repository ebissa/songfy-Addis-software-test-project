import { all } from "redux-saga/effects";
import { addSaga, deleteSaga, editSaga } from "../add/addSaga";
import getSaga from "../get/getSaga";
function* rootSaga() {
  yield all([addSaga(), editSaga(), deleteSaga(), getSaga()]);
}

export default rootSaga;
