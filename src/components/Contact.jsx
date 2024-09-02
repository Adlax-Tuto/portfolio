import React from "react";
import { Wrapper } from "../css/section-style";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
	const year = new Date().getFullYear();

	// console.log(year);

	return (
		<Wrapper id="contact">
			<div className="relative-container">
				<div className="main-title">Contact</div>
				<div className="secondary-title">interested ?</div>
			</div>
			<div className="contact-container">
				<a href="#">
					<MdOutlineLocationOn />
					Amsterdam, Netherlands
				</a>
				<a href="mailto:john.doe@gmail.com">
					<FiMail />
					john.doe@gmail.com
				</a>
				<a href="tel:0033645789652">
					<BsTelephone />
					+33 6 45 78 96 52
				</a>
				<div className="social-networks">
					<a href="https://www.linkedin.com/in/john-doe/" target="_blank">
						<BsLinkedin />
					</a>
					<a href="https://github.com/jDoe" target="_blank">
						<FaGithub />
					</a>
				</div>
				<p>-{year}-</p>
			</div>
		</Wrapper>
	);
};

export default Contact;
