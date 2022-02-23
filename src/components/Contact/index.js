import React, { useState } from "react";
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

    return (
        <main className="contact">
            <h1 className="hText lg">Contact me!</h1>

            {errorMessage && (
                    <div>
                        <p className="hDisplay sm">* {errorMessage}</p>
                    </div>
                )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label className="hText md accent" htmlFor="name" defaultValue={name}>Name:</label>
                    <input className="hDisplay sm" type="text" name="name" onBlur={handleChange} />
                </div>
                <div>
                    <label className="hText md accent" htmlFor="email" defaultValue={email}>Email:</label>
                    <input className="hDisplay sm" type="email" name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label className="hText md accent" htmlFor="message" defaultValue={message}>Message:</label>
                    <textarea className="hDisplay sm" name="message" rows="4" onBlur={handleChange} onChange={handleLimit} />
                    <p className="hDisplay sm limit accent">{messageState} characters left.</p>
                </div>
                <button className="hDisplay sm" type="submit">send</button>
            </form>
        </main>
    )
}

export default Contact;