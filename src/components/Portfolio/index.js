import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";

function Portfolio() {
    const projects = [
        {
            src: "rate-my-bootcamp",
            description: "CRUD Application",
            projectLink: "https://whispering-scrubland-52233.herokuapp.com/"
        },
        {
            src: "tech-blog",
            description: "CRUD Application",
            projectLink: "https://whispering-scrubland-52233.herokuapp.com/"
        },
        {
            src: "e-commerce",
            description: "CLI Back End Application",
            projectLink: "https://github.com/adairconlin/e-commerce-backend",
        },
        {
            src: "team-gen",
            description: "CLI Back End Application",
            projectLink: "https://github.com/adairconlin/team-profile-generator"
        },
    ];

    const [activeProject, setActiveProject] = useState(1);
    const transition = useTransition(activeProject, {
        from: { x: 100, opacity: 0 },
        enter: { x: 0, opacity: 1 },
        config: config.gentle,
        delay: 100,
        expires: true
    });

    const hoverProject = num => { setActiveProject(num) };

    return (
        <main className="portfolio">
            <section>
                <div className="project">       
                    <a href="https://whispering-scrubland-52233.herokuapp.com/">
                        <h1 className={`hText md ${activeProject === 1 && "accent"}`} onMouseEnter={() => hoverProject(1)}>Rate My Bootcamp</h1>
                    </a>
                    <p className={`hDisplay sm-flex ${activeProject === 1 && "show"}`}>// CRUD Application | Collaborative</p>
                </div>
                <div className="project">
                    <a href="https://whispering-scrubland-52233.herokuapp.com/">
                        <h1 className={`hText md ${activeProject === 2 && "accent"}`} onMouseEnter={() => hoverProject(2)}>Tech Blog Application</h1>
                    </a>
                    <p className={`hDisplay sm-flex ${activeProject === 2 && "show"}`}>// CRUD Application</p>
                </div>
                <div className="project">
                    <a href="https://github.com/adairconlin/e-commerce-backend">
                        <h1 className={`hText md ${activeProject === 3 && "accent"}`} onMouseEnter={() => hoverProject(3)}>E-Commerce Back End</h1>
                    </a>
                    <p className={`hDisplay sm-flex ${activeProject === 3 && "show"}`}>// CLI Back End Application</p>
                </div>
                <div className="project">
                    <a href="https://github.com/adairconlin/team-profile-generator">
                        <h1 className={`hText md ${activeProject === 4 && "accent"}`} onMouseEnter={() => hoverProject(4)}>Team Generator</h1>
                    </a>
                    <p className={`hDisplay sm-flex ${activeProject === 4 && "show"}`}>// CLI Back End Application</p>

                </div>
            </section>

            <section>
            {transition((style, item) =>
                item ? <animated.div style={style}>
                            <div className="hover">
                                <a href={projects[item-1].projectLink}>
                                    <img src={require(`../../assets/colored/${projects[item-1].src}.png`)} alt="Website homepage" />
                                    <img src={require(`../../assets/original/${projects[item-1].src}.png`)} alt="Website homepage" className="colored" />
                                </a>
                            </div>
                        </animated.div> : "")} 
            </section>
        </main>
    )
}

export default Portfolio;