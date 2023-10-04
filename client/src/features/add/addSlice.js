import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  isEditing: false,
  editSongId: "",
  deleteSongId: "",
  title: "",
  genreTypeOptions: ["Rap", "R&B", "classic", "electronic", "pop"],
  genre: "Rap",
};

// export const createSong = createAsyncThunk(
//   "add/createSong",
//   async ({ title, genre }) => {
//     try {
//       const response = await axios.post("/api/v1/songs", { title, genre });
//       return response.data;
//     } catch (error) {
//       throw error.response.data.msg;
//     }
//   }
// );

// export const editSong = createAsyncThunk(
//   "add/editSong",
//   async ({ editSongId, title, genre }) => {
//     try {
//       const response = await axios.patch(`/api/v1/songs/${editSongId}`, {
//         title,
//         genre,
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response.data.msg;
//     }
//   }
// );

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    clearValues: (state) => {
      Object.assign(state, {
        isEditing: false,
        editSongId: "",
        title: "",
        genre: "Rap",
      });
    },
    displayAlert: (state) => {
      Object.assign(state, {
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values",
      });
    },
    ClearAlert: (state) => {
      Object.assign(state, {
        showAlert: false,
        alertType: "",
        alertText: "",
      });
    },
    createSongBegin: (state) => {
      state.isLoading = true;
    },
    createSongSuccess: (state) => {
      Object.assign(state, {
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "New Song Created!",
      });
    },
    createSongError: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.error.message,
      });
    },
    setEditSong: (state, action) => {
      state.isEditing = true;
      state.editSongId = action.payload.id;
      state.title = action.payload.title;
      state.genre = action.payload.genre;
    },
    editSongBegin: (state) => {
      state.isLoading = true;
    },

    editSongSuccess: (state) => {
      Object.assign(state, {
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Song updated!",
      });
    },
    editSongError: (state, action) => {
      Object.assign(state, {
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.error.message,
      });
    },
    deleteSongBegin: (state, action) => {
      Object.assign(state, {
        isLoading: true,
        deleteSongId: action.payload,
      });
    },
    deleteSongSuccess: (state) => {
      Object.assign(state, {
        isLoading: false,
        deleteSongId: "",
      });
    },
  },
});

export const {
  handleChange,
  clearValues,
  displayAlert,
  ClearAlert,
  createSongBegin,
  createSongSuccess,
  createSongError,
  editSongBegin,
  editSongError,
  editSongSuccess,
  setEditSong,
  deleteSongBegin,
  deleteSongSuccess,
} = addSlice.actions;

export default addSlice.reducer;
