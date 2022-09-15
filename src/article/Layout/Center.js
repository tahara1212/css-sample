import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";
import CodeBlock from "../../components/article/CodeBlock";

const gridCode = 
`.container {
  display: grid;
  place-items: center;
}`;
const flexCode = 
`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`;
const absoluteCode = 
`.container {
  position: relative;
}
.Box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`;

const Center = () => {
  return (
    <ArticleLayout 
      title="Center"
      caption="色んな上下中央揃え。"
    >
      <PatternBox title="display: grid;">
        <CGrid>
          <Grid>
            <Span>
              display: grid;
            </Span>
          </Grid>
        </CGrid>
        <CodeBlock>
          {gridCode}
        </CodeBlock>
      </PatternBox>
      <PatternBox title="display: flex;">
        <CFlex>
          <Flex>
            <Span>
              display: flex;
            </Span>
          </Flex>
        </CFlex>
        <CodeBlock>
          {flexCode}
        </CodeBlock>
      </PatternBox>
      <PatternBox title="position: absolute;">
        <Container>
          <Absolute>
            <ASpan>
              position: absolute;
            </ASpan>
          </Absolute>
        </Container>
        <CodeBlock>
          {absoluteCode}
        </CodeBlock>
      </PatternBox>
    </ArticleLayout>
  )
}

export default Center;

const Container = styled.div`
  position: relative;
  background-color: aliceblue;
  margin-top: 20px;
  width: 100%;
  height: 320px
`
const CGrid = styled(Container)`
  display: grid;
  place-items: center;
`;
const CFlex = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  background-color: #333;
  width: 300px;
  height: 100px;
`
const Grid = styled(Box)`
  display: grid;
  place-content: center;
`
const Flex = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Absolute = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Span = styled.span`
  color: #fff;
  font-size: clamp(1.2rem, 1.8vw, 2rem);
`
const ASpan = styled(Span)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`
