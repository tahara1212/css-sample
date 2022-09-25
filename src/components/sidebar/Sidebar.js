import { useState } from "react";
import styled from "styled-components";

import { NavigationData } from "../../data/NavigationData";
import ListItem from "./ListItem";

const Sidebar = () => {

  const [openList, setOpen] = useState(() => {
    return NavigationData.map((v, i) =>
      i === 0 ? true : false
    );
  });

  const onClickNavBtn = (index) => {
    // クリックしたコンポーネントのインデックス以外をfalseにしてstateをセット
    setOpen(
      openList.map((open, i) => (i === index ? !open : false))
    );
  };

  return (
    <BG>
      <Navigation>
        {NavigationData.map((nav, i) => (
          <Wrap key={nav.id}>
            <Span open={openList[i]} />
            <Button
              aria-controls={nav.id}
              aria-expanded={openList[i]}
              onClick={() => onClickNavBtn(i)}
              open={openList[i]}
            >
              <Cat>
                {nav.cat}
              </Cat>
            </Button>
            {openList[i] && (
              <ListItem
              nav={nav}
              open={openList[i]}
              />
            )}
          </Wrap>
        ))}
      </Navigation>
    </BG>
  )
}

export default Sidebar;

const BG = styled.div`
  width: 30%;
  height: calc(100vh - 90px);
  background-color: #a9a9a9;
  padding: 20px 0px 20px 20px;
  overflow: hidden;
`
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
  margin-left: 20px;
  /* overflow: scroll; */
`
const Wrap = styled.div`
  position: relative;
  margin-top: 15px;
  &:first-child {
    margin-top: 0;
  }
`
const Span = styled.span.attrs(props => ({
  visibility: props.open ? "visible" : "hidden" 
}))`
  visibility: ${props => props.visibility};
  width: 4px;
  height: 25px;
  border-left: 4px solid white;
  padding-left: 16px;
  position: absolute;
  left: 0px;
  margin-top: -3px;
`
const Button = styled.button.attrs(props => ({
  color: props.open ? "white" : "#333" 
}))`
  color: ${props => props.color};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  outline: none;
  padding-left: 15px;
  appearance: none;
  transition: .2s all;
  &:hover {
    color: white;
    opacity: .7;
  }
`
const Cat = styled.div`
  text-align: left;
`
