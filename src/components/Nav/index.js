import React from "react";

function Nav(props) {
    const {
        setAboutSelected,
        aboutSelected,
        setPortfolioSelected,
        portfolioSelected,
    } = props;

    function resetStates(event) {
        setAboutSelected(false);
        setPortfolioSelected(false);
        if(event.target.textContent === "about") {
            setAboutSelected(true);
        } else if(event.target.textContent === "portfolio") {
            setPortfolioSelected(true);
        }
    }

    return (
        <header>
            <h3 className="hText sm-txt">
                <a href="/">Adair Conlin</a>
            </h3>
            <nav>
                <ul className="hText sm-txt">
                    <li className={`${aboutSelected && "accent"}`} onClick={(event) => resetStates(event)}>about</li>
                    <li className={`${portfolioSelected && "accent"}`} onClick={(event) => resetStates(event)}>portfolio</li>
                    <li>resume</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;