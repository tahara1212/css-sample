import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";

import bg7 from "../../images/goobyeIE/image7.png";

const FilterList = [
  {
    title: "filter: blur(5px);",
    filter: "blur(5px)"
  },
  {
    title: "filter: brightness(0.4);",
    filter: "brightness(0.4)"
  },
  {
    title: "filter: contrast(200%);",
    filter: "contrast(200%)"
  },
  {
    title: "filter: drop-shadow(-25px -25px 4px rgba(0,0,0,0.6));",
    filter: "drop-shadow(-25px -25px 4px rgba(0,0,0,0.6))"
  },
  {
    title: "filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.6));",
    filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.6))"
  },
  {
    title: "filter: grayscale(50%);",
    filter: "grayscale(50%)"
  },
  {
    title: "filter: hue-rotate(90deg);",
    filter: "hue-rotate(90deg)"
  },
  {
    title: "filter: invert(75%);",
    filter: "invert(75%)"
  },
  {
    title: "filter: opacity(25%);",
    filter: "opacity(25%)"
  },
  {
    title: "filter: saturate(30%);",
    filter: "saturate(30%)"
  },
  {
    title: "filter: sepia(60%);",
    filter: "sepia(60%)"
  },
]

const Filter = () => {
  return (
    <ArticleLayout
      title="Filter"
      caption="DOM要素にぼかしや色変化、ドロップシャドウを適用します。"
    >
      {FilterList.map((item, index) => (
        <PatternBox title={item.title} key={index}>
          <ImageBox>
            <Image src={bg7} filter={item.filter} alt="" />
          </ImageBox>
        </PatternBox>
      ))}
      <PatternBox title="box-shadow:0 0 5px #fff, 0 0 5px #333, 0 0 1px #aaa;">
        <ImageBox>
          <Image2 src={bg7} alt="" />
        </ImageBox>
      </PatternBox>
    </ArticleLayout>
  )
}

export default Filter;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 40px;
`
const Image = styled.img.attrs(props => ({
  filter: props.filter
}))`
  width: 20%;
  filter: ${props => props.filter};
`
const Image2 = styled.img`
  width: 20%;
  box-shadow:0 0 5px #fff, 0 0 5px #333, 0 0 1px #aaa;
`
