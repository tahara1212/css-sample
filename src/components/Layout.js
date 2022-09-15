import styled from "styled-components";
import Header from "./header/Header";

import Sidebar from "./sidebar/Sidebar";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Contents>
        <Flex>
          <ArticleBox>
            <PlayG>
              {children}
            </PlayG>
          </ArticleBox>
          <Sidebar />
        </Flex>
      </Contents>
    </>
  )
};

export default Layout;

const Contents = styled.div`
  background-color: white;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
`;

const ArticleBox = styled.div`
  width: 70%;
  height: calc(100vh - 90px);
  flex: 1 1 auto;
  margin-top: 40px;
  overflow: scroll;
`;

const PlayG = styled.div`
  width: 80%;
  background-color: white;
  margin: 0 auto;
  padding-top: 40px;
  padding-left: 40px;
`;
