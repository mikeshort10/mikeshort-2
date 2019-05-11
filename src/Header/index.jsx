import React from "react";
import classNames from "classnames";

const style = require("./index.css");
const cs = classNames.bind(style);

const MSCS = [
	"0000000000000000000000000000000000000000000000000000000000000000",
	"001100011011011001110111111000011110011001100111100111110011111100",
	"001110111011011011100110000000110000011001101100110110011000110000",
	"001111111011011111000111100000011110011111101100110111110000110000",
	"001101011011011011100110000000000011011001101100110110110000110000",
	"001100011011011001110111111000011110011001100111100110011000110000",
	"0000000000000000000000000000000000000000000000000000000000000000",
	"0011111001111001111100110110001100111100",
	"001100000110011011001101101110011011000000",
	"001100000110011011001101101101011011011100",
	"001100000110011011001101101100111011001100",
	"0011111001111001111100110110001100111100",
	"00000000000000000000000000000000000000000000000000000000000000",
	"0001111000111100110000001100110111111011001111001100011001111000",
	"0011000001100110110000001100110001100011011001101110011011000000",
	"0001111001100110110000001100110001100011011001101101011001111000",
	"0000001101100110110000001100110001100011011001101100111000001100",
	"0001111000111100111111100111100001100011001111001100011001111000",
	"00000000000000000000000000000000000000000000000000000000000000",
];

export class Header extends React.Component {
	renderLogo() {
		const arr = [];
		let counter = 0;
		let letters = ["M", "S", "C", "S"];
		let letterCounter = 0;
		for (let line of MSCS) {
			let styledLine = [];
			for (let i = 0; i < line.length; i++) {
				const delay = Math.random() * 3 + 0.6;
				const extendedDelay = 3.6 + Math.random() * 2;
				const animation = `mscs-fade-in 0.5s cubic-bezier(1, 0.75, 0.5, 1) ${
					Math.random() > 0.05
						? delay
						: Math.random() < 0.5
						? extendedDelay
						: Math.random()
				}s forwards`;
				const style = {
					opacity: line[i] === "0" ? 1 : 0,
					animation: line[i] === "0" ? animation : "none",
				};
				styledLine.push(
					<span
						style={style}
						key={i}
						className={cs(`MSCS-${line[i]}`)}
					>
						{line[i] ? letters[letterCounter++ % 4] : 0}
					</span>,
				);
			}
			arr.push(
				<div key={counter++} className={cs("MSCS")}>
					{styledLine}
				</div>,
			);
		}
		return arr;
	}

	render() {
		return (
			<div id="header" className={cs("header-logo", "text-center")}>
				<h3>{this.renderLogo()}</h3>
				<h2>
					<div className={cs("header-values")} id="reliability">
						Reliability
					</div>
					<div className={cs("header-values")} id="style">
						Style
					</div>
					<div className={cs("header-values")} id="innovation">
						ιηησνατιση
					</div>
				</h2>
				<img className={cs("header-photo")} src="zion.jpg" alt="Zion" />
			</div>
		);
	}
}
