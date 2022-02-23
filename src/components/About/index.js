import React from "react";

function About() {

    return (
        <main className="about">
            <div className="hover">
                <img src={require("../../assets/colored/profile.png")} alt="Profile of Adair" className="profile colored"/>
                <img src={require("../../assets/original/profile.png")} alt="Profile of Adair" className="profile"/>
            </div>
            <div>
                <h2 className="hText sm">Hello! My name is</h2>
                <h3 className="hText lg">Adair Conlin.</h3>
                <p className="hDisplay sm-flex">I love all things web. My driving passion is to succeed in making the web applications I'm faced with function as beautifully as they look, with optimal coding practices and user experience in mind. Every development project is accompanied by a of drive for success.</p>
                <p className="hDisplay sm-flex">I am located in Charlotte, North Carolina where I enjoy the company of my partner and our pets. My free time regularly includes hiking and exploring new greenways.  I'm also a big fan of video games and music as well as art and film, which I studied a lot of along the journey of receiving my Bachelors in Animation.</p>
            </div>
        </main>
    )
}

export default About;

