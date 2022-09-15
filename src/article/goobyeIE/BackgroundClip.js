import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";

import bg8 from "../../images/goobyeIE/image8.jpg";

const bgcList = [
  {
    title: "background-clip: border-box;",
    bgc: "border-box"
  },
  {
    title: "background-clip: padding-box;",
    bgc: "padding-box"
  },
  {
    title: "background-clip: content-box;",
    bgc: "content-box"
  },
  {
    title: "-webkit-background-clip: text;",
    bgc: "text"
  },
]

const BackgroundClip = () => {
  return (
    <ArticleLayout
      title="BackgroundClip"
      caption="DOM要素の背景の適用範囲を指定します。"
    >
      {bgcList.map((item, index) => (
        <PatternBox title={item.title} key={index}>
          <ImageBox>
            {index === 3 ? (
                <BGC bgc={item.bgc} index={index}>Lorem Ipsum</BGC>
              ) : (
                <BGC bgc={item.bgc} index={index}></BGC>
              )}
          </ImageBox>
        </PatternBox>
      ))}
    </ArticleLayout>
  )
}

export default BackgroundClip;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
const BGC = styled.div.attrs(props => ({
  bgc: props.bgc,
  border: props.index === 3 ? "none" : "dashed 10px #b0c4de"
}))`
  color: transparent;
  /* font-size: 10rem; */
  font-size: clamp(4rem, 6vw, 10rem);
  font-weight: bold;
  padding: 25px;
  background-image: url(${bg8});
  background-size: cover;
  background-clip: ${props => props.bgc};
  -webkit-background-clip: ${props => props.bgc};
  border: ${props => props.border};
  height: 360px;
  line-height: 360px;
`
