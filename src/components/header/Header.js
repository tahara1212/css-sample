import styled from "styled-components";

const Header = () => {
  return (
    <Heading>
      <HeadingInner>
        <h1>Sample List</h1>
      </HeadingInner>
    </Heading>
  )
};

export default Header;

const Heading = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  border-radius: 0px;
  background: #333;
  box-shadow:  5px 5px 20px #9f9f9f, -5px -5px 20px #ffffff;
`

const HeadingInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  color: white;
  font-size: 1.6rem;
`;
