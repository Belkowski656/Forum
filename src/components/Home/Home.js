import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header
        type={"home"}
        title={"Welcome to Forum"}
        text={"Internet Forum for Everyone!!!"}
      />
      <Register />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
