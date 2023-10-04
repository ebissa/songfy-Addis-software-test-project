import AddSong from "./Pages/Dashboard/AddSong";
import Landing from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sharedlayout from "./Pages/Dashboard/Sharedlayout";
import Songs from "./Pages/Dashboard/Songs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Sharedlayout />}>
          <Route path="/main/all-songs" element={<Songs />}></Route>
          <Route path="/main/add-song" element={<AddSong />}></Route>
          {/* <Route path="/main/all-songs" element={<AllSong />}></Route> */}

          {/* </Route> */}
        </Route>

        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
