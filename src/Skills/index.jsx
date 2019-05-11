import React from "react";
import classNames from "classnames/bind";
// import $ from "jquery";

const style = require("./index.css");
const cs = classNames.bind(style);

export class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [
				{ name: "Jest", type: "Testing" },
				{ name: "Enzyme", type: "Testing" },
				{ name: "Mocha", type: "Testing" },
				{ name: "Chai", type: "Testing" },
				{ name: "Node", type: "Backend" },
				{ name: "Express", type: "Backend" },
				{ name: "MongoDB", type: "Database" },
				{ name: "Postgres", type: "Database" },
				{ name: "Typeorm", type: "Database" },
				{ name: "SQL", type: "Database" },
				{ name: "Mongoose", type: "Database" },
				{ name: "React", type: "FrontEnd" },
				{ name: "Redux", type: "FrontEnd" },
				{ name: "Javascript/ES6", type: "FrontEnd" },
				{ name: "Typescript", type: "FrontEnd" },
				{ name: "HTML5", type: "FrontEnd" },
				{ name: "CSS3", type: "Styling" },
				{ name: "Sass", type: "Styling" },
				{ name: "Bootstrap", type: "Styling" },
				{ name: "jQuery", type: "Styling" },
			],
		};
	}

	renderSkills() {
		const { skills } = this.state;
		let type;
		const arr = [];
		skills.forEach(skill => {
			if (skill.type !== type) {
				arr.push([skill.type]);
				type = skill.type;
			}
			arr[arr.length - 1].push(
				<li key={skill.name} className={skill.type}>
					{skill.name}
				</li>,
			);
		});
		return (
			<div className={cs("skills")}>
				{arr.map(type => (
					<div key={type}>
						<h4 className={cs("text-center")}>{type[0]}</h4>
						<ul className={cs("skills-list")}>{type.slice(1)}</ul>
					</div>
				))}
			</div>
		);
	}

	render() {
		return (
			<div id="skills" className={cs("skills-container")}>
				<h2 className={cs("text-center", "skills-header")}>
					Tech Stack
				</h2>
				{this.renderSkills()}
			</div>
		);
	}

	// renderSkills() {
	// 	const { skills } = this.state;
	// 	const arr = [];
	// 	const fontSizes = {};
	// 	for (let i = 0; i < skills.length; i++) {
	// 		const color =
	// 			5 *
	// 			(skills[i].type.charCodeAt(0) +
	// 				skills[i].type.charCodeAt(1) +
	// 				skills[i].type.charCodeAt(2));
	// 		const skill = skills[i];
	// 		let fontSize = fontSizes[skills[i].type];
	// 		if (fontSize >= 0) {
	// 			fontSizes[skills[i].type] += 2;
	// 		} else {
	// 			fontSizes[skills[i].type] = fontSize = 0;
	// 		}
	// 		arr.push(
	// 			<div
	// 				key={i}
	// 				style={{
	// 					color: `hsl(${color}, 100%, 40%)`,
	// 					background: `hsl(${200 - color}, 100%, 25%)`,
	// 					zIndex: 8 - fontSize,
	// 					fontSize: (16 - fontSize) * 2,
	// 				}}
	// 				className={cs("tech")}
	// 			>
	// 				{skill.name}
	// 			</div>,
	// 		);
	// 	}
	// 	return arr;
	// }

	// componentDidMount() {
	// 	const elements = document.getElementsByClassName("tech");
	// 	for (let i = 0; i < elements.length; i++) {
	// 		elements[i].style.top = Math.random() * 100 + "%";
	// 		elements[i].style.left = Math.random() * 100 + "%";
	// 		// const j = i;
	// 		// elements[j].style.animation = `bounceDown ${Math.random() * 5 +
	// 		// 	10}s linear infinite alternate, bounceRight ${Math.random() *
	// 		// 	5 +
	// 		// 	10}s linear infinite alternate`;
	// 	}
	// }

	// render() {
	// 	return (
	// 		<div id="tech-stack" className={cs("skills")}>
	// 			<h2 className={cs("text-center", "tech-stack-header")}>
	// 				Tech Stack
	// 			</h2>
	// 			{this.renderSkills()}
	// 		</div>
	// 	);
	// }
}
