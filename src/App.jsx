import { Routes, Route } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorits from "./pages/Favorits";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="app">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />} exact />
        <Route path="/new-meetup" element={<NewMeetups />} />
        <Route path="/favorits" element={<Favorits />} />
      </Routes>
    </div>
  );
}

export default App;
