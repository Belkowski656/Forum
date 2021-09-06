import { Wrapper, Text, Up, Content } from "./Footer.style";

const Footer = () => {
  const handleClick = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Wrapper>
        <Content>
          <Text>Copyright Forum</Text>
          <Up onClick={handleClick}>
            <i className="fas fa-arrow-up"></i>
          </Up>
        </Content>
      </Wrapper>
    </>
  );
};

export default Footer;
