import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { validateEmail } from "../../utils/helpers" ;

function Contact() {
    const [errorMessage, setErrorMessage] = useState("");
    const [formState, setFormState] = useState({ name: "", email: "", message: ""});
    const { name, email, message } = formState;
    const [messageState, setMessageState] = useState(500);

    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleLimit(e) {
        let currentLength = e.target.value.length;
        setMessageState(500 - currentLength);
    }
    const props = useSpring({ to: { opacity: 1}, from: { opacity: 0 }, config: config.gentle })
    const labelAnim = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: -150 }, config: config.gentle})
    const inputAnim = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 150 }, config: config.gentle})

    return (
        <animated.main className="contact" style={props}>
            <h1 className="hText lg">Contact me!</h1>

            {errorMessage && (
                    <div>
                        <p className="hDisplay sm">* {errorMessage}</p>
                    </div>
                )}

            <form onSubmit={handleSubmit}>
                <div>
                    <animated.label className="hText md accent" htmlFor="name" defaultValue={name} style={labelAnim}>Name:</animated.label>
                    <animated.input className="hDisplay sm" type="text" name="name" onBlur={handleChange} style={inputAnim} />
                </div>
                <div>
                    <animated.label className="hText md accent" htmlFor="email" defaultValue={email} style={labelAnim}>Email:</animated.label>
                    <animated.input className="hDisplay sm" type="email" name="email" onBlur={handleChange} style={inputAnim} />
                </div>
                <div>
                    <animated.label className="hText md accent" htmlFor="message" defaultValue={message} style={labelAnim}>Message:</animated.label>
                    <animated.textarea className="hDisplay sm" name="message" rows="4" onBlur={handleChange} onChange={handleLimit} style={inputAnim} />
                    <p className="hDisplay sm limit accent">{messageState} characters left.</p>
                </div>
                <button className="hDisplay sm" type="submit">send</button>
            </form>
        </animated.main>
    )
}

export default Contact;