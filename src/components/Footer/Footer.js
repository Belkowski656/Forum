import { Wrapper, Text, Up, Content } from "./Footer.style";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Text>Copyright Forum</Text>
          <Up>
            <i class="fas fa-arrow-up"></i>
          </Up>
        </Content>
      </Wrapper>
    </>
  );
};

export default Footer;
