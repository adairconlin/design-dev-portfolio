import React from "react";

function Nav(props) {
    const {
        setAboutSelected,
        aboutSelected,
        setPortfolioSelected,
        portfolioSelected,
        setResumeSelected,
        resumeSelected
    } = props;

    function resetStates(event) {
        setAboutSelected(false);
        setPortfolioSelected(false);
        setResumeSelected(false);
        if(event.target.textContent === "about") {
            setAboutSelected(true);
        } else if(event.target.textContent === "portfolio") {
            setPortfolioSelected(true);
        } else if(event.target.textContent === "resume") {
            setResumeSelected(true);
        }
    }

    return (
        <header>
            <h3 className="hText sm">
                <a href="/">Adair Conlin</a>
            </h3>
            <nav>
                <ul className="hText sm">
                    <li className={`${aboutSelected && "accent"}`} onClick={(event) => resetStates(event)}>about</li>
                    <li className={`${portfolioSelected && "accent"}`} onClick={(event) => resetStates(event)}>portfolio</li>
                    <li className={`${resumeSelected && "accent"}`} onClick={(event) => resetStates(event)}>resume</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;