import React, { useState } from "react";
import styles from "./App.module.css";
import Home from "../pages/home";
import About from "../pages/about";

import { Router, Route, Routes } from "../router";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
			<Routes>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
