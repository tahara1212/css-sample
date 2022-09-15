import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";
import CodeBlock from "../../components/article/CodeBlock";

import img1 from "../../images/goobyeIE/grid1.jpg";
import img3 from "../../images/goobyeIE/grid3.jpg";
import img4 from "../../images/goobyeIE/grid4.jpg";
import img2 from "../../images/goobyeIE/grid2.jpg";
import img5 from "../../images/goobyeIE/grid5.jpg";
import img6 from "../../images/goobyeIE/grid6.jpg";
import img7 from "../../images/goobyeIE/grid7.jpg";
import img8 from "../../images/goobyeIE/grid8.jpg";
import img9 from "../../images/goobyeIE/grid9.jpg";

const gridCode1 = 
`.container {
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  grid-template-rows: 1fr, 1fr, 1fr;
  gap: min(1vw, 10px);
  height: 360px;
}
`

const gridCode2 = 
`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 2.5fr 1fr 1fr;
  grid-template-rows: 180px 114px 114px 114px 180px;
  gap: min(1vw, 10px);
}
img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  object-fit: cover;
}
.imgA {
  grid-column: 1 / 3;
  grid-row: 1 / 4;
}
.imgB {
  grid-column: 3 / 6;
  grid-row: 1;
}
.imgC {
  grid-column: 3;
  grid-row: 2 / 5;
}
.imgD {
  grid-column: 4;
  grid-row: 2;
}
.imgE {
  grid-column: 5;
  grid-row: 2;
}
.imgF {
  grid-column: 4 / 6;
  grid-row: 3 / 6;
}
.imgG {
  grid-column: 1;
  grid-row: 4;
}
.imgH {
  grid-column: 2;
  grid-row: 4;
}
.imgI {
  grid-column: 1 / 4;
  grid-row: 5;
}
`

const areasCode = 
`.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: min(1vw, 10px);
  grid-template-areas: 
  "areaA areaA areaB areaB areaB"
  "areaA areaA areaC areaD areaE"
  "areaA areaA areaC areaF areaF"
  "areaG areaH areaC areaF areaF"
  "areaI areaI areaI areaF areaF"
  ;
  height: 600px;
}
.areaA {
  grid-area: areaA;
}
.areaB {
  grid-area: areaB;
}
.areaC {
  grid-area: areaC;
}
.areaD {
  grid-area: areaD;
}
.areaE {
  grid-area: areaE;
}
.areaF {
  grid-area: areaF;
}
.areaG {
  grid-area: areaG;
}
.areaH {
  grid-area: areaH;
}
.areaI {
  grid-area: areaI;
}
`

const gridParamList = [
  {
    title: "GridLayout 3 × 3",
    columns: "repeat(3, 1fr)",
    rows: "repeat(3, 1fr)",
    items: [
      {
        column: "",
        row: "",
        bg: "#e6e6fa",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#f0e68c",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#008080",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#ff7f50",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#4b0082",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#1e90ff",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#48d1cc",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#d2b48c",
        img: ""
      },
      {
        column: "",
        row: "",
        bg: "#7fff00",
        img: ""
      }
    ],
    code: gridCode1
  },
  {
    title: "GridLayout 5 × 5",
    columns: "1fr 1fr 2.5fr 1fr 1fr",
    rows: "min(10.177083vw,180px) min(7.0625vw,114px) min(6.854167vw,110px) min(7.0625vw,114px) min(10.177083vw,180px)",
    items: [
      {
        column: "1 / 3",
        row: "1 / 4",
        bg: "",
        img: img4
      },
      {
        column: "3 / 6",
        row: "1",
        bg: "",
        img: img3
      },
      {
        column: "3",
        row: "2 / 5",
        bg: "",
        img: img1
      },
      {
        column: "4",
        row: "2",
        bg: "",
        img: img6
      },
      {
        column: "5",
        row: "2",
        bg: "",
        img: img9
      },
      {
        column: "4 / 6",
        row: "3 / 6",
        bg: "",
        img: img5
      },
      {
        column: "1",
        row: "4",
        bg: "",
        img: img7
      },
      {
        column: "2",
        row: "4",
        bg: "",
        img: img8
      },
      {
        column: "1 / 4",
        row: "5",
        bg: "",
        img: img2
      }
    ],
    code: gridCode2
  }
]

const autoFillCode = (name) =>
`.container {
  display: grid;
  grid-template-columns: repeat(${name}, minmax(150px, 1fr));
  gap: min(1vw, 10px);
  height: 150px;
}
`

const Grid = () => {
  return (
    <ArticleLayout 
      title="Grid"
      caption="2次元レイアウトを作成する。"
    >
      {gridParamList.map((param, index) => (
        <PatternBox key={param.title} title={param.title}>
          <Container columns={param.columns} rows={param.rows} index={index}>
            {param.items.map((item) => (
              <Box key={item.img} column={item.column} row={item.row} bg={item.bg}>
                {index >= 1 && (
                  <Image src={item.img} alt="" />
                )}
              </Box>
            ))}
          </Container>
          <CodeBlock>
            {param.code}
          </CodeBlock>
        </PatternBox>
      ))}
      <PatternBox title="grid-template-areas">
        <AreasContainer>
          <AreaItem area="areaA">areaA</AreaItem>
          <AreaItem area="areaB">areaB</AreaItem>
          <AreaItem area="areaC">areaC</AreaItem>
          <AreaItem area="areaD">areaD</AreaItem>
          <AreaItem area="areaE">areaE</AreaItem>
          <AreaItem area="areaF">areaF</AreaItem>
          <AreaItem area="areaG">areaG</AreaItem>
          <AreaItem area="areaH">areaH</AreaItem>
          <AreaItem area="areaI">areaI</AreaItem>
        </AreasContainer>
        <CodeBlock>
          {areasCode}
        </CodeBlock>
      </PatternBox>
      <PatternBox title="auto-fill">
        <Cap>
          親要素にスペースが余る場合、空のグリッドが作られます.
        </Cap>
        <AutoParent>
          <AutoGridWrap auto="auto-fill">
            <AutoGridItem />
            <AutoGridItem />
            <AutoGridItem />
          </AutoGridWrap>
        </AutoParent>
        <CodeBlock>
          {autoFillCode("auto-fill")}
        </CodeBlock>
      </PatternBox>
      <PatternBox title="auto-fit">
        <Cap>
          親要素にスペースが余る場合、アイテムの幅を変更してスペースを埋めます。
        </Cap>
          <AutoParent>
            <AutoGridWrap auto="auto-fit">
              <AutoGridItem />
              <AutoGridItem />
              <AutoGridItem />
            </AutoGridWrap>
          </AutoParent>
        <CodeBlock>
          {autoFillCode("auto-fit")}
        </CodeBlock>
      </PatternBox>
    </ArticleLayout>
  )
}

export default Grid;

const Container = styled.ul.attrs(props => ({
  columns: props.columns,
  rows: props.rows,
  height: props.index < 1 ? "19vw" : "auto"
}))`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  gap: min(1vw, 10px);
  height: ${props => props.height};
`
const Box = styled.li.attrs(props => ({
  bg: props.bg,
  column: props.column,
  row: props.row
}))`
  background-color: ${props => props.bg};
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  object-fit: cover;
`
const AreasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: min(1vw, 10px);
  grid-template-areas: 
  "areaA areaA areaB areaB areaB"
  "areaA areaA areaC areaD areaE"
  "areaA areaA areaC areaF areaF"
  "areaG areaH areaC areaF areaF"
  "areaI areaI areaI areaF areaF"
  ;
  height: 500px;
`
const AreaItem = styled.div.attrs(props => ({
  area: props.area
}))`
  grid-area: ${props => props.area};
  background-color: #008080;
  display: grid;
  place-content: center;
  color: #fff;
  font-size: clamp(1.2rem, 2vw, 3rem);
  font-weight: bold;
`
const AutoParent = styled.div`
  background-color: #a9a9a9;
  width: 100%;
`
const AutoGridWrap = styled.div.attrs(props => ({
  auto: props.auto,
}))`
  display: grid;
  grid-template-columns: repeat(${props => props.auto}, minmax(150px, 1fr));
  gap: min(1vw, 10px);
  height: 150px;
`
const AutoGridItem = styled.div`
  background-color: #333;
`
const Cap = styled.p`
  margin: 20px 0;
  font-size: 1.6rem;
`;
