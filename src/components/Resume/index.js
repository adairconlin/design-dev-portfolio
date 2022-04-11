import React from "react";
import { useSpring, animated, config } from "react-spring";

function Resume() {
    const props = useSpring({ to: { opacity: 1}, from: { opacity: 0 }, config: config.gentle });
    const xAnim = useSpring({ to: { y: 0 }, from: { y: -50 }, config: config.gentle});
    const frontAnim = useSpring({ to: { y: 0 }, from: { y: 50 }, config: config.gentle});
    const backAnim = useSpring({ to: { y: 0 }, from: { y: 50 }, config: config.gentle, delay: 100});
    const techAnim = useSpring({ to: { y: 0 }, from: { y: 50 }, config: config.gentle, delay: 200});

    return (
        <animated.main className="resume" style={props}>
            <animated.h1 className="hText lg" style={xAnim}>My current skills.</animated.h1>
            <div>
                <animated.section style={frontAnim}>
                    <h2 className="hText md accent">Front End</h2>
                    <ul className="hDisplay sm">
                        <li><span>/* </span>JavaScript <span>*/</span></li>
                        <li><span>/* </span>React.js <span>*/</span></li>
                        <li><span>/* </span>jQuery <span>*/</span></li>
                        <li><span>/* </span>Bootstrap <span>*/</span></li>
                        <li><span>/* </span>HTML5 <span>*/</span></li>
                        <li><span>/* </span>CSS3 <span>*/</span></li>
                        <li><span>/* </span>Responsive web design <span>*/</span></li>
                        <li><span>/* </span>Accessible web design <span>*/</span></li>
                    </ul>
                </animated.section>
                <animated.section style={backAnim}>
                    <h2 className="hText md accent">Back End</h2>
                    <ul className="hDisplay sm">
                        <li><span>// </span>Node.js</li>
                        <li><span>// </span>Express.js</li>
                        <li><span>// </span>MySQL/SQL</li>
                        <li><span>// </span>NoSQL</li>
                        <li><span>// </span>GraphQL</li>
                        <li><span>// </span>MongoDB</li>
                        <li><span>// </span>Web API's</li>
                    </ul>
                </animated.section>
                <animated.section style={techAnim}>
                    <h2 className="hText md accent">Technology</h2>
                    <ul className="hDisplay sm tech">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>VSCode</li>
                        <li>Adobe XD</li>
                        <li>Adobe Illustrator</li>
                    </ul>
                </animated.section>
            </div>
            <button><a href="./resume.pdf" download="resume.pdf" className="hDisplay sm">Download Full Resume</a></button>
        </animated.main>
    )
}

export default Resume;