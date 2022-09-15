import styled from "styled-components";

const ArticleLayout = (props) => {
  const {title, caption} = props;
  return (
    <Article>
      <Title>{title}</Title>
      <Cap>{caption}</Cap>
      {props.children}
    </Article>
  )
}

export default ArticleLayout;

const Article = styled.article`
  margin-bottom: 160px;
`
const Title = styled.h1`
  font-size: clamp(2rem, 6.38vw, 6rem);
  font-weight: bold;
`;
const Cap = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
`;
