import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      {
      aboutSelected ? (<About />) 
      : portfolioSelected ? (<Portfolio />)
      : resumeSelected ? (<Resume />)
      : contactSelected ? (<Contact />)
      :<Error />
      }
      <Footer></Footer>
    </>
  );
}

export default App;
