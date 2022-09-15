import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = (props) => {

  const {nav, open} = props;

  return (
    <Ul id={nav.id} aria-hidden={open}>
      {nav.articles.map((article) => (
        <Li key={article}>
          <NaviItems to={article}>{article}</NaviItems>
        </Li>
      ))}
    </Ul>
  )
}

export default ListItem;

const NaviItems = styled(Link)`
  display: inline-block;
  color: #fff;
  font-size: 1.6rem;
  text-align: left;
  text-decoration: none;
  transition: opacity .2s;
  line-height: 2.5;
  &:hover {
    opacity: .6;
  }
`
const Ul = styled.ul`
  text-indent: 1.4rem;
  margin-top: 5px;
`
const Li = styled.li`
  /* cursor: pointer; */
`
