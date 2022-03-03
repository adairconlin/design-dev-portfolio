import React from "react";
import { useSpring, animated, config } from "react-spring";

function Nav(props) {
    const {
        setAboutSelected,
        aboutSelected,
        setPortfolioSelected,
        portfolioSelected,
        setResumeSelected,
        resumeSelected,
        setContactSelected,
        contactSelected
    } = props;

    function resetStates(event) {
        setAboutSelected(false);
        setPortfolioSelected(false);
        setResumeSelected(false);
        setContactSelected(false);
        if(event.target.textContent === "about") {
            setAboutSelected(true);
        } else if(event.target.textContent === "portfolio") {
            setPortfolioSelected(true);
        } else if(event.target.textContent === "resume") {
            setResumeSelected(true);
        } else if (event.target.textContent === "contact") {
            setContactSelected(true);
        }
    }
    const yAnim = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -50 }, config: config.slow})

    return (
        <animated.header style={yAnim}>
            <h3 className="hText sm">
                <a href="/my-react-portfolio">Adair Conlin</a>
            </h3>
            <nav>
                <ul className="hText sm">
                    <li className={`${aboutSelected && "accent"}`} onClick={(event) => resetStates(event)}>about</li>
                    <li className={`${portfolioSelected && "accent"}`} onClick={(event) => resetStates(event)}>portfolio</li>
                    <li className={`${resumeSelected && "accent"}`} onClick={(event) => resetStates(event)}>resume</li>
                    <li className={`${contactSelected && "accent"}`} onClick={(event) => resetStates(event)}>contact</li>
                </ul>
            </nav>
        </animated.header>
    )
}

export default Nav;