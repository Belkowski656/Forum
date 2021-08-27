import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Forums from "./components/Forums/Forums";
import Topic from "./components/Topic/Topic";
import Profile from "./components/Profile/Profile";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import TopicsStarted from "./components/TopicsStarted/TopicsStarted";
import RepliesCreated from "./components/RepliesCreated/RepliesCreated";
import EditProfile from "./components/EditProfile/EditProfile";
import Informations from "./components/Informations/Informations";
import Seciurity from "./components/Seciurity/Seciurity";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/" element={<ProfileInfo />} />
            <Route path="topics" element={<TopicsStarted />} />
            <Route path="replies" element={<RepliesCreated />} />
            <Route path="edit" element={<EditProfile />}>
              <Route path="informations" element={<Informations />} />
              <Route path="seciurity" element={<Seciurity />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
