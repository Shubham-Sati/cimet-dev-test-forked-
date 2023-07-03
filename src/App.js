import { useState } from "react";
// import { fetchDataFromApi } from "./utils/api";
import useFetch from "./hooks/useFetch";
import { darkTheme, lightTheme } from "./utils/Theme";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import ProductListingPage from "./pages/ProductListingPage";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  width: 100vw;
`;

function App() {
  const { darkMode } = useSelector((state) => state.theme);
  const { data } = useFetch("generate-token");
  // implement localstorage for storing token from the above api hit

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <ContentWrapper>
          <ProductListingPage />
        </ContentWrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
