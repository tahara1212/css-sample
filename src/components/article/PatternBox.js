import styled from "styled-components";

const PatternBox = (props) => {
  const {title} = props;
  return (
    <div>
      <Heading>
        {title}
      </Heading>
      <Box>
        {props.children}
      </Box>
    </div>
  )
}

export default PatternBox;

const Heading = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: bold;
  margin-top: 80px;
`

const Box = styled.div`
  width: 100%;
  margin-top: 30px;
`

