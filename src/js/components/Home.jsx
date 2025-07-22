import React, { useState } from "react";

//include images into your bundle
import '/workspaces/reactTrafficLight-sDeyra/src/styles/index.css';

//create your first component
const Home = () => {
	const [red, setRed] = useState("secondary")
	const [yellow, setYellow] = useState("secondary")
	const [green, setGreen] = useState("secondary")
	function prenderRojo() {
		setRed("danger")
		setYellow("secondary")
		setGreen("secondary")
	}
	function prenderAmarillo() {
		setRed("secondary")
		setYellow("warning")
		setGreen("secondary")
	}
	function prenderVerde() {
		setGreen("success")
		setRed("secondary")
		setYellow("secondary")
	}
	return (
		<div className="text-center">
			<div id="app">
				<div className="d-flex justify-content-center">
					<div id="trafficTop"></div>
				</div>
				<div id="container">
					<div className={`red-light rounded-circle bg-${red}`} onClick={prenderRojo}></div>
					<div className={`yellow-light rounded-circle bg-${yellow}`} onClick={prenderAmarillo}></div>
					<div className={`green-light rounded-circle bg-${green}`} onClick={prenderVerde}></div>
				</div>

			</div>

		</div>
	);
};

export default Home;