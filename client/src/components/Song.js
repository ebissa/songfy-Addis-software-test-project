import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/song";
import SongInfo from "./SongInfo";
import { useDispatch, useSelector } from "react-redux";
import { deleteSongBegin, setEditSong } from "../features/add/addSlice";
const Song = ({ _id, title, genre, createdAt }) => {
  const dispatch = useDispatch();
  let date = moment(createdAt);
  date = date.format("MMM Do,YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{title.charAt(0)}</div>
        <div className="info">
          <h5>{title}</h5>
          <p>{genre}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <SongInfo icon={<FaCalendarAlt />} text={date} />
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/main/add-song"
              className="btn edit-btn"
              onClick={() =>
                dispatch(setEditSong({ id: _id, title: title, genre: genre }))
              }
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteSongBegin(_id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Song;
