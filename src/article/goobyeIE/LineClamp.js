import { useState } from "react";
import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";

const textList = [
  {
    heading: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    heading: "Where can I get some?",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    heading: "Where does it come from?",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
  }
]

const LineClamp = () => {
  const [openList, setOpen] = useState(() => {
    return [...Array(3)].map(() => false);
  });
  const onClickMore = (index) => {
    setOpen(
      openList.map((open, i) => (i === index ? !open : open))
    )
  }
  return (
    <ArticleLayout 
      title="LineClamp"
      caption="指定した行数でテキストを省略表示する."
    >
      <PatternBox title="-webkit-line-clamp: 4;">
        <Flex>
        {textList.map((text, index) => (
          <Box key={index}>
            <Heading>{text.heading}</Heading>
            <Text>{text.text}</Text>
          </Box>
        ))}
        </Flex>
      </PatternBox>
      <PatternBox title="ReadMore">
        <Flex>
          {textList.map((text, index) => (
            <Box key={index}>
              <Heading>{text.heading}</Heading>
              <Text open={openList[index]}>{text.text}</Text>
              <MoreBox>
                <More open={openList[index]} onClick={() => onClickMore(index)}></More>
              </MoreBox>
            </Box>
          ))}
        </Flex>
      </PatternBox>
    </ArticleLayout>
  )
}

export default LineClamp;

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #333;
  border-radius: 5px;
  padding: 40px 20px;
`
const Box = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 25%;
  min-height: 140px;
`
const Heading = styled.h2`
  font-size: clamp(1.6rem, 1.5vw, 2.2rem);
  font-weight: bold;
`
const Text = styled.p.attrs(props => ({
  lineClamp: props.open ? "999" : "4" 
}))`
  font-size: clamp(1.2rem, 1.2vw, 1.6rem);
  display: -webkit-box;
  line-clamp: ${props => props.lineClamp};
  -webkit-line-clamp: ${props => props.lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top : 20px;
`
const MoreBox = styled.div`
  text-align: right;
`
const More = styled.div`
  color: #696969;
  font-size: 1.6rem;
  cursor: pointer;
  margin-top: 5px;
  transition: opacity .3s;
  &::after {
    content: 'more';
    ${({open}) => open && `
      content: 'close';
    `}
  }
  &:hover {
    opacity: .5;
  }
`
