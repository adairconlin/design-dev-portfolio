import React, { useState } from "react";

function Project() {
    const [images] = useState([
        {
            title: "Rate My Bootcamp",
            subtitle: "CRUD Application",
            projectLink: "https://whispering-scrubland-52233.herokuapp.com/",
            githubLink: "https://github.com/adairconlin/rate-my-bootcamp",
            src: "rate-my-bootcamp"
        },
        {
            title: "Tech Blog",
            subtitle: "CRUD Application",
            projectLink: "https://sheltered-badlands-90401.herokuapp.com/",
            githubLink: "https://github.com/adairconlin/tech-blog-application",
            src: "tech-blog"
        },
        {
            title: "E-Commerce",
            subtitle: "CLI Application",
            projectLink: "https://github.com/adairconlin/e-commerce-backend",
            githubLink: "https://github.com/adairconlin/e-commerce-backend",
            src: "e-commerce"
        }
    ])

    return (
        <>
            {images.map((image) => (
                <div className="hover">
                    <img
                        src={require(`../../assets/colored/${image.src}.png`)}
                        alt={image.title}
                        key={`${image.title} colored`}
                        className="project colored inner-img"
                    />
                    <div className="colored project-hover inner-div">
                        <h1 className="hText lg-dis">{image.title}</h1>
                        <h2 className="hText prj-sub">{image.subtitle}</h2>
                        <ul className="hDisplay prj-link">
                            <li><a href={image.projectLink}>View Project</a></li>
                            <li><a href={image.githubLink}>View on Github</a></li>
                        </ul>
                    </div>
                    <img
                        src={require(`../../assets/original/${image.src}.png`)}
                        alt={image.title}
                        key={`${image.title} original`}
                        className="project inner-original"
                    />
                </div>
            ))}
        </>
    )
}

export default Project;