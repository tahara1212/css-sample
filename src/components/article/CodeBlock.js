import styled from "styled-components";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const CodeBlock = ({children}) => {
  return (
    <Box>
      <SyntaxHighlighter language="css" style={syntaxStyle}>
        {children}
      </SyntaxHighlighter>
    </Box>
  )
}

export default CodeBlock;

const Box = styled.div`
  font-size: 1.4rem;
`
