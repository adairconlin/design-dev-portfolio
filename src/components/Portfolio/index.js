import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";

function Portfolio() {
    const projects = [
        {
            src: "rate-my-bootcamp",
            description: "CRUD Application",
            projectLink: "https://whispering-scrubland-52233.herokuapp.com/",
            githubLink: "https://github.com/adairconlin/rate-my-bootcamp"
        },
        {
            src: "tech-blog",
            description: "CRUD Application",
            projectLink: "https://sheltered-badlands-90401.herokuapp.com/",
            githubLink: "https://github.com/adairconlin/tech-blog-application"
        },
        {
            src: "e-commerce",
            description: "CLI Back End Application",
            githubLink: "https://github.com/adairconlin/e-commerce-backend",
        },
        {
            src: "team-gen",
            description: "CLI Back End Application",
            githubLink: "https://github.com/adairconlin/team-profile-generator"
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
                    <p className="hDisplay sm-flex">// CRUD Application | Collaborative</p>
                </div>
                <div className="project">
                    <a href="https://whispering-scrubland-52233.herokuapp.com/">
                        <h1 className={`hText md ${activeProject === 2 && "accent"}`} onMouseEnter={() => hoverProject(2)}>Tech Blog Application</h1>
                    </a>
                    <p className="hDisplay sm-flex">// CRUD Application</p>
                </div>
                <div className="project">
                    <a href="https://github.com/adairconlin/e-commerce-backend">
                        <h1 className={`hText md ${activeProject === 3 && "accent"}`} onMouseEnter={() => hoverProject(3)}>E-Commerce Back End</h1>
                    </a>
                    <p className="hDisplay sm-flex">// CLI Back End Application</p>
                </div>
                <div className="project">
                    <a href="https://github.com/adairconlin/team-profile-generator">
                        <h1 className={`hText md ${activeProject === 4 && "accent"}`} onMouseEnter={() => hoverProject(4)}>Team Generator</h1>
                    </a>
                    <p className="hDisplay sm-flex">// CLI Back End Application</p>
                </div>
            </section>

            <section>
            {transition((style, item) =>
                item ? <animated.div style={style}>
                            <div>
                                {projects[item-1].projectLink && <a href={projects[item-1].projectLink} className="hDisplay sm">View Project</a>}
                                <a href={projects[item-1].githubLink} className="hDisplay sm">View GitHub Repo</a>
                            </div>
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