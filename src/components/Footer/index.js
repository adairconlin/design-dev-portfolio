import React from "react";
import { useSpring, animated, config } from "react-spring";

function Footer() {
    const yAnim = useSpring({ to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 50 }, config: config.slow})
    return (
        <animated.footer style={yAnim}>
            <ul className="hText sm">
                <li><a href="mailto:adair.conlin@gmail.com">email</a></li>
                <li><a href="https://github.com/adairconlin">github</a></li>
                <li><a href="https://www.linkedin.com/in/adair-conlin/">linkedin</a></li>
            </ul>
        </animated.footer>
    )
}

export default Footer;