import ArticleLayout from "../../components/article/ArticleLayout";
import PatternBox from "../../components/article/PatternBox";
import styles from './container.module.scss';

const Card = (props) => {
  return (
    <div className={styles.gridBox}>
      {props.array.map((data) => (
        <div key={data} className={props.cardWrap}>
          <div className={styles.card}>
            <div className={styles.thumbFilter}>
              <div className={styles.thumnail}></div>
            </div>
            <div className={styles.contents}>
              <div className={styles.title}>Lorem Ipsum</div>
              <div className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const ContainerQueries = () => {
  return (
    <ArticleLayout 
      title="ContainerQueries"
      caption="指定した親コンテナのサイズによって、その子要素のCSSを切り替えます。"
    >
      <PatternBox title="auto-fit card × 4">
        <Card array={[...Array(4)]} cardWrap={styles.cardWrap} />
      </PatternBox>
      <PatternBox title="auto-fit card × 3">
        <Card array={[...Array(3)]} cardWrap={styles.cardWrap} />
      </PatternBox>
      <PatternBox title="auto-fit card × 2">
        <Card array={[...Array(2)]} cardWrap={styles.nonConCardWrap} />
      </PatternBox>
      <PatternBox title="auto-fit card × 1">
        <Card array={[...Array(1)]} cardWrap={styles.nonConCardWrap} />
      </PatternBox>
      <PatternBox title="auto-fit card × 2">
        <Card array={[...Array(2)]} cardWrap={styles.cardWrap} />
      </PatternBox>
      <PatternBox title="auto-fit card × 1">
        <Card array={[...Array(1)]} cardWrap={styles.cardWrap} />
      </PatternBox>
      <PatternBox title="card">
        <Card array={[...Array(1)]} cardWrap={styles.resizeCardWrap} />
      </PatternBox>
    </ArticleLayout>
  )
}

export default ContainerQueries;

