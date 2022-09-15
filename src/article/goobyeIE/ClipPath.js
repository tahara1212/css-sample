import { useState } from "react";
import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";

import bg3 from "../../images/goobyeIE/image3.jpg";

const clipPathList = [
  {
    title: "clip-path: inset(100px 50px round 10px);",
    cp: "inset(100px 50px round 10px)"
  },
  {
    title: "clip-path: circle(120px);",
    cp: "circle(120px)"
  },
  {
    title: "clip-path: ellipse(160px 120px at center);",
    cp: "ellipse(160px 80px at center)"
  },
  {
    title: "clip-path: polygon(0 0,100% 0,100% 0%,0 100%);",
    cp: "polygon(0 0,100% 0,100% 0%,0 100%)"
  }
];

const insetOptionList = [
  {
    name: "top to bottom",
    val: "--inset-bottom"
  },
  {
    name: "bottom to top",
    val: "--inset-top"
  },
  {
    name: "left to right",
    val: "--inset-right"
  },
  {
    name: "right to left",
    val: "--inset-left"
  }
];

const circleOptionList = [
  "left center",
  "right center",
  "center top",
  "center bottom",
  "center",
  "left top",
  "right top",
  "left bottom",
  "right bottom"
];

const ClipPath = () => {
  const [circleVal, setCircleVal] = useState(circleOptionList[0]);
  const [insetVal, setInsetVal] = useState(insetOptionList[0].val);
  const onChangeInsetSelect = (e) => {
    setInsetVal(e.target.value);
  };
  const onChangeCircleSelect = (e) => {
    setCircleVal(e.target.value);
  }
  return (
    <ArticleLayout
      title="ClipPath"
      caption="指定した図形でDOM要素をクリッピングマスクします。"
    >
      {clipPathList.map((cp) => (
        <PatternBox key={cp.title} title={cp.title}>
          <ImageBox>
            <Image src={bg3} alt="" clipPath={cp.cp} />
          </ImageBox>
        </PatternBox>
      ))}
      <PatternBox title=":hover clip-path: circle(size at position);">
        <Select onChange={(e) => onChangeCircleSelect(e)}>
          {circleOptionList.map((val) => (
            <option key={val} value={val}>{val}</option>
          ))}
        </Select>
        <Flex>
          <Btn opValue={circleVal}>
            <Span>:hover</Span>
          </Btn>
          <Btn opValue={circleVal}>
            <Span>:hover</Span>
          </Btn>
          <Btn opValue={circleVal}>
            <Span>:hover</Span>
          </Btn>
        </Flex>
      </PatternBox>
      <PatternBox title=":hover - clip-path: inset(top right bottom left);">
        <Select onChange={(e) => onChangeInsetSelect(e)}>
          {insetOptionList.map((val) => (
            <option key={val.val} value={val.val}>{val.name}</option>
          ))}
        </Select>
        <Flex>
          <Btn2 opValue={insetVal}>
            <Span>:hover</Span>
          </Btn2>
          <Btn2 opValue={insetVal}>
            <Span>:hover</Span>
          </Btn2>
          <Btn2 opValue={insetVal}>
            <Span>:hover</Span>
          </Btn2>
        </Flex>
      </PatternBox>
    </ArticleLayout>
  )
}

export default ClipPath;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
const Image = styled.img.attrs(props => ({
  clipPath: props.clipPath
}))`
  width: 60%;
  clip-path: ${props => props.clipPath};
`
const Select = styled.select`
  width: 20%;
`
const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
  margin-top: 40px;
`
const Btn = styled.button.attrs(props => ({
  opValue: props.opValue
}))`
  position: relative;
  background: transparent;
  cursor: pointer;
  color: #000;
  padding: 2rem 6rem;
  border-radius: 5px;
  overflow: hidden;
  transition-property: color;
  transition-delay: 0.15s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    clip-path: circle(var(--size) at ${props => props.opValue});
    transition: 0.35s linear;
  }
  &:hover {
    --size: 400px;
    color: #fff;
  }
`
const Btn2 = styled.button.attrs(props => ({
  opValue: props.opValue
}))`
  ${props => props.opValue}: 100%;
  position: relative;
  background: transparent;
  cursor: pointer;
  color: #000;
  padding: 2rem 6rem;
  border-radius: 5px;
  overflow: hidden;
  transition-property: color;
  transition-delay: 0.12s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    clip-path: inset(
      var(--inset-top) 
      var(--inset-right) 
      var(--inset-bottom)
      var(--inset-left)
    );
    transition: clip-path 0.3s, z-index 0s 1s;
    z-index: -99;
  }
  &:hover {
    --inset-top: 0;
    --inset-right: 0;
    --inset-bottom: 0;
    --inset-left: 0;
    color: #fff;
    &::before {
      transition: clip-path 0.3s linear;
      z-index: 1;
    }
  }
`
const Span = styled.span`
  position: relative;
  font-size: 1.6rem;
  z-index: 1;
`
