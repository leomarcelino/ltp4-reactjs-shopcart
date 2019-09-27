import React from "react";
import styled from "styled-components";

import Filter from "./components/Filter";
import Main from "./components/Main";
import GlobalStyle from "./styles/global";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Filter></Filter>
      <Main></Main>
      <GlobalStyle></GlobalStyle>
    </Container>
  );
}

export default App;
