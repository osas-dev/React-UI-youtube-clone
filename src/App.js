import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sigin from "./pages/Sigin";
import Video from "./pages/Video";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`


function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container >
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random"/>} />
                  <Route path="trending" element={<Home type="trending"/>} />
                  <Route path="subscriptions" element={<Home type="sub"/>} />
                  <Route path="sign-in" element={<Sigin />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
