import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrapper/addSong";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import {
  handleChange,
  clearValues,
  displayAlert,
  ClearAlert, // Changed from ClearAlert
  editSongBegin,
  createSongBegin,
} from "../../features/add/addSlice";
import Alert from "../../components/Alert";

const AddSong = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    isEditing,
    showAlert,
    title,
    genre,
    genreTypeOptions,
    editSongId,
  } = useSelector((state) => state.add);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre) {
      dispatch(displayAlert({ message: "Please provide all values" }));
      return;
    }
    if (isEditing) {
      dispatch(editSongBegin());
    } else {
      dispatch(createSongBegin()); // Dispatch createSongBegin action
    }
  };

  const handleSongInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Song" : "Add Song"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="title"
            handleChange={handleSongInput}
            value={title}
          />
          <FormRowSelect
            name="genre"
            labelText="Genre"
            handleChange={handleSongInput}
            value={genre}
            list={genreTypeOptions}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isEditing ? "Update" : "Add"}
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch(clearValues());
                dispatch(ClearAlert()); // Dispatch clearAlert action
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddSong;
