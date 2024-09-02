import React from "react";
import { Wrapper } from "../css/section-style";

const About = () => {
	console.log("Test");

	return (
		<Wrapper id="about">
			<div className="relative-container">
				<div className="main-title">About</div>
				<div className="secondary-title">...myself</div>
			</div>
			<div className="about-container">
				<p>I am a front-end developer who creates user interfaces that are intuitive, nice, and responsive.</p>
			</div>
		</Wrapper>
	);
};

export default About;
