import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import addReducer from "./features/add/addSlice";
import getReducer from "./features/get/getSlice";
import rootSaga from "./features/rootSaga/rootSaga";
const saga = createSagaMiddleware();

const rootReducer = {
  add: addReducer,
  get: getReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});
saga.run(rootSaga);

export default store;
