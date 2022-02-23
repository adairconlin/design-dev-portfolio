import React from "react";

function Resume() {

    return (
        <main className="resume">
            <h1 className="hText lg">My current skills.</h1>
            <a href="./resume.pdf" download="resume.pdf">Download Full Resume</a>
            <div>
                <section>
                    <h2 className="hText md accent">Front End</h2>
                    <ul className="hDisplay sm">
                        <li><span>/* </span>HTML5 <span>*/</span></li>
                        <li><span>/* </span>CSS <span>*/</span></li>
                        <li><span>/* </span>JavaScript <span>*/</span></li>
                        <li><span>/* </span>React.js <span>*/</span></li>
                        <li><span>/* </span>jQuery <span>*/</span></li>
                        <li><span>/* </span>Bootstrap <span>*/</span></li>
                        <li><span>/* </span>Bulma <span>*/</span></li>
                        <li><span>/* </span>Responsive web design <span>*/</span></li>
                        <li><span>/* </span>Accessible web design <span>*/</span></li>
                    </ul>
                </section>
                <section>
                    <h2 className="hText md accent">Back End</h2>
                    <ul className="hDisplay sm">
                        <li><span>// </span>Node.js</li>
                        <li><span>// </span>Express.js</li>
                        <li><span>// </span>MySQL</li>
                        <li><span>// </span>Sequelize.js</li>
                        <li><span>// </span>NoSQL</li>
                        <li><span>// </span>MongoDB</li>
                    </ul>
                </section>
                <section>
                    <h2 className="hText md accent">Technology</h2>
                    <ul className="hDisplay sm tech">
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