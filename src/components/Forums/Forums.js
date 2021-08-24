import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";

import { Wrapper } from "./Forums.style";

const Forums = () => {
  return (
    <>
      <Navigation />
      <Header
        title={"Welcome To Forum"}
        text={"Internet Forum for Everyone!!!"}
      />
      <Wrapper>
        <Table />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Forums;
