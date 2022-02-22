import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      {
      aboutSelected ? (<About></About>) 
      : portfolioSelected ? (<Portfolio></Portfolio>)
      : <Error></Error>
      }
      <Footer></Footer>
    </>
  );
}

export default App;
