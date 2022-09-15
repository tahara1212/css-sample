import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";

const ScrollBehavior = () => {
  return (
    <ArticleLayout
      title="ScrollBehavior"
      caption="ページ内リンクのスクロールをスムーススクロールにします。"
    >
      <PatternBox title="scroll-behavior: smooth;">
        <ScrollBox>
          <ScrollHeader>
            <Ul>
              <Li>
                <A href="#A">A</A>
              </Li>
              <Li>
                <A href="#B">B</A>
              </Li>
              <Li>
                <A href="#C">C</A>
              </Li>
              <Li>
                <A href="#D">D</A>
              </Li>
              <Li>
                <A href="#E">E</A>
              </Li>
            </Ul>
          </ScrollHeader>
          <SectionBox>
            <Section id="A" color="coral">
              <Span section="A" />
            </Section>
            <Section id="B" color="darkseagreen">
              <Span section="B" />
            </Section>
            <Section id="C" color="dodgerblue">
              <Span section="C" />
            </Section>
            <Section id="D" color="slategray">
              <Span section="D" />
            </Section>
            <Section id="E" color="gold">
              <Span section="E" />
            </Section>
          </SectionBox>
        </ScrollBox>
      </PatternBox>
    </ArticleLayout>
  )
}

export default ScrollBehavior;

const ScrollBox = styled.div`
  position: relative;
  height: 300px;
  overflow: scroll;
  scroll-behavior: smooth;
`
const ScrollHeader = styled.nav`
  position: sticky;
  top: 0;
  background-color: #333;
  width: 100%;
  height: 30px;
  line-height: 30px;
  opacity: .6;
  z-index: 2;
`
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px
`
const Li = styled.li`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`
const SectionBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`
const Section = styled.section.attrs(props => ({
  color: props.color
}))`
  background-color: ${props => props.color};
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
`
const Span = styled.span.attrs(props => ({
  section: props.section
}))`
  &::after {
    content: "section ${props => props.section}";
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
  }
`
const A = styled.a`
  color: #fff;
  text-decoration: none;
`
