import styled from "styled-components";
import { useState } from "react";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";
import bg5 from "../../images/goobyeIE/image5.jpg";
import bg6 from "../../images/goobyeIE/image6.jpg";

const filterList = [
  {
    id: 1,
    title: "backdrop-filter: blur;",
    filter: "blur",
    unit: "px"
  },
  {
    id: 2,
    title: "backdrop-filter: brightness;",
    filter: "brightness",
    unit: "%"
  },
  {
    id: 3,
    title: "backdrop-filter: contrast;",
    filter: "contrast",
    unit: "%"
  },
  {
    id: 4,
    title: "backdrop-filter: grayscale;",
    filter: "grayscale",
    unit: "%"
  },
  {
    id: 5,
    title: "backdrop-filter: hue-rotate;",
    filter: "hue-rotate",
    unit: "deg"
  },
  {
    id: 6,
    title: "backdrop-filter: invert;",
    filter: "invert",
    unit: "%"
  },
  {
    id: 7,
    title: "backdrop-filter: opacity;",
    filter: "opacity",
    unit: "%"
  },
  {
    id: 8,
    title: "backdrop-filter: sepia;",
    filter: "sepia",
    unit: "%"
  },
  {
    id: 8,
    title: "backdrop-filter: saturate;",
    filter: "saturate",
    unit: "%"
  }
]

const BackdropFilter = () => {
  const [valList, setVal] = useState(() => {
    return [...Array(filterList.length)].map(() => 50);
  });

  const onChangeRange = (e, index) => {
    setVal(
      valList.map((val, i) => (i === index ? e.target.value : val))
    )
  };

  return (
    <ArticleLayout 
      title="BackdropFilter"
      caption="DOM要素の背後の領域に、コントラストやぼかし等のグラフィック効果を指定します。"
    >
      <PatternBox title="backdrop-filter: blur(20px) brightness(100%);">
        <ImageBox>
          <Filter />
          <Image src={bg6} alt="" />
        </ImageBox>
      </PatternBox>
      {filterList.map((pattern, index) => (
        <PatternBox title={pattern.title} key={index} >
          <ImageBox>
            <FilterBox>
              <FilterEXP filter={`${pattern.filter}(${valList[index]}${pattern.unit})`} val={valList[index]} />
              <Image src={bg5} alt="" />
            </FilterBox>
            <RangeBox>
              <Span>{`${pattern.filter}(${valList[index]}${pattern.unit})`}</Span>
              <Input type="range" min="0" max="100" step="0.001" onChange={(e) => onChangeRange(e, index)} />
            </RangeBox>
          </ImageBox>
        </PatternBox>
      ))}
    </ArticleLayout>
  )
}

export default BackdropFilter;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
const Filter = styled.div`
  position: absolute;
  width: 4.4vw;
  height: 8.5vw;
  backdrop-filter: blur(5px) brightness(70%);
  top: 50%;
  left: 48.5%;
  transform: translate(-50%, -50%);
`
const FilterEXP = styled.div.attrs(props => ({
  filter: props.filter
}))`
  position: absolute;
  width: 60%;
  height: 100%;
  backdrop-filter: ${props => props.filter};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Image = styled.img`
  width: 60%;
`
const Input = styled.input`
  width: 60%;
`
const Span = styled.span`
  display: block;
  font-size: 1.6rem;
`
const FilterBox = styled.div`
  position: relative;
`
const RangeBox = styled.div`
  margin-top: 20px;
`
