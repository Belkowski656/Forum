import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoggedProvider } from "./Context/loggedContext";

import Home from "./components/Home/Home";
import Forums from "./components/Forums/Forums";
import Forum from "./components/Forum/Forum";
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
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import { GlobalStyles } from "./GlobalStyles";
import { useEffect, useState } from "react";

const App = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      sessionStorage.setItem("token", localStorage.getItem("token"));
    }

    if (sessionStorage.getItem("token")) {
      setLogged(true);
    }
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop>
          <GlobalStyles />
          <LoggedProvider value={{ logged, setLogged }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/forum/:category" element={<Forum />} />
              <Route path="/topic/:topicId" element={<Topic />} />
              <Route path="/profile/:userId" element={<Profile />}>
                <Route path="/" element={<ProfileInfo />} />
                <Route path="topics" element={<TopicsStarted />} />
                <Route path="replies" element={<RepliesCreated />} />
                <Route path="edit" element={<EditProfile />}>
                  <Route path="/" element={<Informations />} />
                  <Route path="seciurity" element={<Seciurity />} />
                </Route>
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </LoggedProvider>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
