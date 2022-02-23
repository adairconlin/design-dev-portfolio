import React from "react";

function Resume() {

    return (
        <main className="resume">
            <h1 className="hText lg-txt">My current skills.</h1>
            <div>
                <section>
                    <h2 className="hText lg-dis accent">Front End</h2>
                    <ul className="hDisplay sm">
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Responsive web design</li>
                        <li>Accessible web design</li>
                    </ul>
                </section>
                <section>
                    <h2 className="hText lg-dis accent">Back End</h2>
                    <ul className="hDisplay sm">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>Sequelize.js</li>
                        <li>NoSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </section>
                <section>
                    <h2 className="hText lg-dis accent">Technology</h2>
                    <ul className="hDisplay sm">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>VSCode</li>
                        <li>Adobe XD</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default Resume;