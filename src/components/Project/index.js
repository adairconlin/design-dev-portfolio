import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

function Project() {
    const [images1] = useState([
        {
            title: "Rate My Bootcamp",
            subtitle: "CRUD Application",
            projectLink: "https://whispering-scrubland-52233.herokuapp.com/",
            githubLink: "https://github.com/adairconlin/rate-my-bootcamp",
            src: "rate-my-bootcamp",
        },
        {
            title: "Tech Blog",
            subtitle: "CRUD Application",
            projectLink: "https://sheltered-badlands-90401.herokuapp.com/",
            githubLink: "https://github.com/adairconlin/tech-blog-application",
            src: "tech-blog",
        },
        {
            title: "E-Commerce",
            subtitle: "CLI Application",
            projectLink: "https://github.com/adairconlin/e-commerce-backend",
            githubLink: "https://github.com/adairconlin/e-commerce-backend",
            src: "e-commerce",
        }
    ])
    const [images2] = useState([
        {
            title: "Weather Dashboard",
            subtitle: "Weather API",
            projectLink: "https://adairconlin.art/weather-dashboard/",
            githubLink: "https://github.com/adairconlin/weather-dashboard",
            src: "weather-dash",
        },
        {
            title: "Team Profile Generator",
            subtitle: "CLI Application",
            projectLink: "https://github.com/adairconlin/team-profile-generator",
            githubLink: "https://github.com/adairconlin/team-profile-generator",
            src: "team-gen",
        }, 
        {
            title: "Food Mood",
            subtitle: "Meal & Drink Application",
            projectLink: "https://adairconlin.art/food-mood/",
            githubLink: "https://github.com/adairconlin/food-mood",
            src: "food-mood",
        }
    ])
    const topAnim = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: -150 }, config: config.gentle});
    const botAnim = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 150 }, config: config.gentle, delay: 100});

    return (
        <>
            {images1.map((image) => (
                <animated.div className="hover" style={topAnim}>
                <a href={image.projectLink}>
                    <div className="colored project-hover inner-div">
                        <h1 className="hText md">{image.title}</h1>
                        <h2 className="hText prj-sub">{image.subtitle}</h2>
                        <ul className="hDisplay prj-link">
                            <li><a href={image.projectLink}>View Project</a></li>
                            <li><a href={image.githubLink}>View on Github</a></li>
                        </ul>
                    </div>
                    <img
                        src={require(`../../assets/colored/${image.src}.png`)}
                        alt={image.title}
                        key={`${image.title} colored`}
                        className="project"
                    />
                    <img
                        src={require(`../../assets/original/${image.src}.png`)}
                        alt={image.title}
                        key={`${image.title} original`}
                        className="project colored inner-img"
                    /></a>
                </animated.div>
            ))}
            {images2.map((image) => (
                <animated.div className="hover" style={botAnim}>
                <a href={image.projectLink}>
                    <div className="colored project-hover inner-div">
                        <h1 className="hText md">{image.title}</h1>
                        <h2 className="hText prj-sub">{image.subtitle}</h2>
                        <ul className="hDisplay prj-link">
                            <li><a href={image.projectLink}>View Project</a></li>
                            <li><a href={image.githubLink}>View on Github</a></li>
                        </ul>
                    </div>
                    <img
                        src={require(`../../assets/colored/${image.src}.png`)}
                        alt={image.title}
                        key={`${image.title} colored`}
                        className="project"
                    />
                    <img
                        src={require(`../../assets/original/${image.src}.png`)}
                        alt={image.title}
                        key={`${image.title} original`}
                        className="project colored inner-img"
                    /></a>
                </animated.div>
            ))}
        </>
    )
}

export default Project;