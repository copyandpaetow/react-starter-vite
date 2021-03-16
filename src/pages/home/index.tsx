import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<div className={`page ${styles.home}`}>
			<h1>Home</h1>
		</div>
	);
};

export default Home;
