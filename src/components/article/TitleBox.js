import styled from "styled-components";

const TitleBox = (props) => {
  const {title, caption} = props;
  return (
    <>
      <Title>{title}</Title>
      <Cap>{caption}</Cap>
    </>
  )
}

export default TitleBox;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
`;

const Cap = styled.p`
  margin-top: 20px;
`;
