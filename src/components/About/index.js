import React from "react";
import { useSpring, animated, config } from "react-spring";

function About() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.slow, delay: 100 });
    const xAnim = useSpring({ to: { x: 0 }, from: { x: -50 }, config: config.gentle, delay: 100 });
    const yAnim = useSpring({ to: { y: 0 }, from: { y: -50 }, config: config.gentle, delay: 200 });
    const pAnim = useSpring({ to: { y: 0 }, from: { y: 50 }, config: config.gentle, delay: 300 });

    return (
        <animated.main className="about" style={props}>
            <animated.div className="hover" style={xAnim}>
                <img src={require("../../assets/colored/profile.png")} alt="Profile of Adair" className="profile colored"/>
                <img src={require("../../assets/original/profile.png")} alt="Profile of Adair" className="profile"/>
            </animated.div>
            <div>
                <animated.h2 className="hText sm" style={yAnim}>Hello! My name is</animated.h2>
                <h3 className="hText lg">Adair Conlin.</h3>
                <animated.p className="hDisplay sm-flex" style={pAnim}>I love all things web. My driving passion is to succeed in making the web applications I'm faced with function as beautifully as they look, with optimal coding practices and user experience in mind. Every development project is accompanied by a of drive for success.</animated.p>
                <animated.p className="hDisplay sm-flex" style={pAnim}>I am located in Charlotte, North Carolina where I enjoy the company of my partner and our pets. My free time regularly includes hiking and exploring new greenways.  I'm also a big fan of video games and music as well as art and film, which I studied a lot of along the journey of receiving my Bachelors in Animation.</animated.p>
            </div>
        </animated.main>
    )
}

export default About;

