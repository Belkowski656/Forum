import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Table from "../Table/Table";

import { Wrapper } from "./Forum.style";

const Forum = () => {
  return (
    <>
      <Navigation />
      <Header title={"Example Title"} text={"Example text!!!"} />
      <Wrapper>
        <Table type={"topic"} />
      </Wrapper>
    </>
  );
};

export default Forum;
