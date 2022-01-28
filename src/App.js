import { Route } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import Favorits from "./pages/Favorits";


function App() {
  return (
    <div className="app">
      <Route path="/">
        <AllMeetupPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favorits">
        <Favorits />
      </Route>
    </div>
  );
}

export default App;
