import React from "react";

function Nav() {

    return (
        <header>
            <h3 className="hText sm-txt">
                <a href="/">Adair Conlin</a>
            </h3>
            <nav>
                <ul className="hText sm-txt">
                    <li className="accent">about</li>
                    <li>portfolio</li>
                    <li>resume</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;