import { useState } from "react";
import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";

const InputArea = (props) => {
  const [checkedList, setChecked] = useState(() => {
    return [...Array(2)].map(() => true);
  });

  const onChangeChecked = (index) => {
    setChecked(
      checkedList.map((checked, i) => (i === index ? !checked : checked))
    );
  }
  return (
    <BG>
      <Center>
        <Box>
          <Flex>
            <Input ac={props.ac} type="checkbox" checked={checkedList[0]} onChange={() => onChangeChecked(0)}/>
            <Tag>Checkbox</Tag>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Input ac={props.ac} type="radio" checked={checkedList[1]} onChange={() => onChangeChecked(1)}/>
            <Tag>Radio</Tag>
          </Flex>
        </Box>
        <Box>
          <Tag>Range</Tag>
          <Input ac={props.ac} type="range"/>
        </Box>
        <Box>
          <Tag>Progress</Tag>
          <Progress pac={props.pac} max="100" value="70">70%</Progress>
        </Box>
      </Center>
    </BG>
  )
}

const AccentColor = () => {
  return (
    <ArticleLayout
      title="AccentColor"
      caption="フォーム要素のチェックボックス・ラジオボタン・レンジスライダー・プログレスバーのカラーを変更する。"
    >
      <PatternBox title="accent-color: #ffc0cb;">
        <InputArea ac="" pac="" />
      </PatternBox>
      <PatternBox title="accent-color: cornflowerblue;">
        <InputArea ac="cornflowerblue" pac="cornflowerblue" />
      </PatternBox>
      <PatternBox title="accent-color: #00ff7f;">
        <InputArea ac="#00ff7f" pac="#00ff7f" />
      </PatternBox>
    </ArticleLayout>
  )
}

export default AccentColor;

const Input = styled.input.attrs(props => ({
  ac: props.ac
}))`
  accent-color: ${props => props.ac};
`
const BG = styled.div`
  background-color: #333;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  position: relative;
  width: 50%;
  height: 200px;
`
const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`
const Box = styled.div`
  margin-top: 20px;
`
const Progress = styled.progress.attrs(props => ({
  pac: props.pac
}))`
  accent-color: ${props => props.pac};
`
const Tag = styled.span`
  display: block;
  color: #fff;
  font-size: 1.6rem;
`
