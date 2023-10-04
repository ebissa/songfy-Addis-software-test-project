import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  showAlert: false,
  genreTypeOptions: ["Rap", "R&B", "classic", "electronic", "pop"],
  search: "",
  searchGenre: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
  songs: [],
  totalSongs: 0,
  numOfPages: 1,
  alertType: "",
  alertText: "",
  page: 1,
};

const getSlice = createSlice({
  name: "get",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    clearAlert: (state) => {
      Object.assign(state, {
        showAlert: false,
        alertType: "",
        alertText: "",
      });
    },
    clearFilters: (state) => {
      Object.assign(state, {
        search: "",
        searchGenre: "all",
        sort: "latest",
      });
    },
    getSongsBegin: (state) => {
      Object.assign(state, {
        isLoading: true,
        showAlert: "false",
      });
    },
    getSongsSuccess: (state, { payload }) => {
      Object.assign(state, {
        isLoading: false,
        songs: payload.songs,
        totalSongs: payload.totalSongs,
        numOfPages: payload.numOfPages,
      });
    },

    changePage: (state, action) => {
      console.log(action.payload);
      Object.assign(state, {
        page: action.payload,
      });
    },
    setEditSong: (state, action) => {
      console.log(action.payload);
      Object.assign(state, {
        page: action.payload,
      });
    },
  },
});

export const {
  handleChange,
  clearAlert,
  getSongsBegin,
  getSongsSuccess,
  changePage,
  clearFilters,
} = getSlice.actions;

export default getSlice.reducer;
