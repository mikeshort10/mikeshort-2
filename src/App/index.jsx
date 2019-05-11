import React from "react";
import "./index.css";
import { Skills } from "../Skills";
import { Header } from "../Header";
import { About } from "../About";
import { Projects } from "../Projects";
import { NavBar } from "../NavBar";
// import classNames from "classnames/bind";

// const style = require("./index.css");
// const cs = classNames.bind(style);

function App() {
	return (
		<>
			<NavBar />
			<Header />
			<About />
			<Projects />
			<Skills />
		</>
	);
}

export default App;
