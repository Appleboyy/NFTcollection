import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Footer,
  Navigation,
  Home,
  About,
  Roadmap,
  Team,
  Faq,
} from "./components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
