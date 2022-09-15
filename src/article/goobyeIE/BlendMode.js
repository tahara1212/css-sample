import styled from "styled-components";

import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";

import bg1 from "../../images/goobyeIE/image1.jpg";
import bg2 from "../../images/goobyeIE/image2.jpg";
import bg4 from "../../images/goobyeIE/image4.jpg";
import bg5 from "../../images/goobyeIE/image5.jpg";

const white = "#fff";
const black = "#333";
const lime = "#32CD32";

const blendModeList = [
  {
    title: "mix-blend-mode: multiply;（乗算）",
    bg: white,
    blend: "multiply"
  },
  {
    title: "mix-blend-mode: screen;（スクリーン）",
    bg: black,
    blend: "screen"
  },
  {
    title: "mix-blend-mode: overlay;（オーバーレイ）",
    bg: black,
    blend: "overlay"
  },
  {
    title: "mix-blend-mode: darken;（暗く）",
    bg: white,
    blend: "darken"
  },
  {
    title: "mix-blend-mode: lighten;（明るく）",
    bg: black,
    blend: "lighten"
  },
  {
    title: "mix-blend-mode: color-dodge;（覆い焼きカラー）",
    bg: black,
    blend: "color-dodge"
  },
  {
    title: "mix-blend-mode: color-burn;（焼き込みカラー）",
    bg: lime,
    blend: "color-burn"
  },
  {
    title: "mix-blend-mode: hard-light;（ハードライト）",
    bg: white,
    blend: "hard-light"
  },
  {
    title: "mix-blend-mode: soft-light;（ソフトライト）",
    bg: black,
    blend: "soft-light"
  },
  {
    title: "mix-blend-mode: difference;（差の絶対値）",
    bg: white,
    blend: "difference"
  },
  {
    title: "mix-blend-mode: exclusion;（除外）",
    bg: white,
    blend: "exclusion"
  },
  {
    title: "mix-blend-mode: hue;（色相）",
    bg: lime,
    blend: "hue"
  },
  {
    title: "mix-blend-mode: saturation;（彩度）",
    bg: lime,
    blend: "saturation"
  },
  {
    title: "mix-blend-mode: color;（カラー）",
    bg: black,
    blend: "color"
  },
  {
    title: "mix-blend-mode: luminosity;（輝度）",
    bg: white,
    blend: "luminosity"
  },
]

const BlendMode = () => {
  return (
    <ArticleLayout 
      title="BlendMode"
      caption="DOM要素を重ねた時の見え方を指定する。"
    >
      {blendModeList.map((listItem, index) => (
        <PatternBox title={listItem.title} key={index}>
          <ImageBox bg={listItem.bg}>
            <Image src={bg1} alt="" />
            <Image2 blend={listItem.blend} src={bg5} alt="" />
          </ImageBox>
        </PatternBox>
      ))}
      <PatternBox title="Text × Image（オーバーレイ）">
        <ImageBox bg={white}>
          <Image3 src={bg5} alt="" />
          <ImageText>
            Lorem<MGL>Ipsum</MGL>
          </ImageText>
        </ImageBox>
      </PatternBox>
      <PatternBox title="Image × Image（オーバーレイ）">
        <ImageBox bg={white}>
          <Image3 src={bg4} alt="" />
          <Image4 blend="overlay" src={bg2} alt="" />
        </ImageBox>
      </PatternBox>
    </ArticleLayout>
  )
}

export default BlendMode;

const ImageBox = styled.div.attrs(props => ({
  background: props.bg
}))`
  position: relative;
  background: ${props => props.bg}; 
  width: 100%;
  height: 520px;
  margin-top: 20px;
`

const Image = styled.img`
  display: block;
  width: 70%;
  height: 400px;
  object-fit: cover;
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
`;

const Image2 = styled(Image).attrs(props => ({
  mixBlendMode: props.blend
}))`
  mix-blend-mode: ${props => props.mixBlendMode};
  top: 55%;
  left: 55%;
`

const Image3 = styled(Image)`
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Image4 = styled(Image3).attrs(props => ({
  mixBlendMode: props.blend
}))`
  mix-blend-mode: ${props => props.mixBlendMode};
`
const ImageText = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 400px;
  mix-blend-mode: overlay;
  color: white;
  font-size: clamp(1.8rem, 10vw, 10rem);
  font-weight: bold;
  text-align: center;
  padding-top: clamp(80px, 10vw, 100px);
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const MGL = styled.div`
  margin-left: 10px;
`
