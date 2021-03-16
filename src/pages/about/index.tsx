import React, { useState } from "react";
import styles from "./About.module.css";

const About = () => {
	const [count, setCount] = useState(0);

	return (
		<div className={`page ${styles.About}`}>
			<h1>About</h1>
		</div>
	);
};

export default About;
