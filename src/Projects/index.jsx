import React from "react";
import classNames from "classnames/bind";

const style = require("./index.css");
const cs = classNames.bind(style);

const projects = [
	{
		name: `Lindsay Granger and the Imperius Curse`,
		src: "lindsay-granger.png",
		description: "Dungeon Crawler Game for HP Fans",
		href: "/games/lindsay-granger",
		color: "black",
		background: "hsl(60, 75%, 85%)",
		fontFamily: "lumos",
		gitHref:
			"https://github.com/mikeshort10/mike-short/tree/master/games/src/components/Granger",
	},
	{
		name: "Poll Pool",
		src: "pool-poll.ico",
		description: "MERN Stack Poll-Sharing Application",
		href: "https://the-poll-pool.herokuapp.com/",
		color: "grey",
		background: "lightblue",
		fontFamily: "waver",
		gitHref: "https://github.com/mikeshort10/poll-app",
	},
	{
		name: "Extracurricular Scheduler",
		src: "",
		description: "Choose clubs based on your interests",
		href: "/clubs",
		color: "#DDD",
		background: "hsl(300, 100%, 25%)",
		fontFamily: "monospace",
		gitHref:
			"https://github.com/mikeshort10/mike-short/tree/master/games/src/components/Clubs",
	},
	{
		name: "SPOCK PAPER SCISSORS",
		src: "sps.png",
		description: "If you thought Rock Paper Scissors was hard...",
		href: "/games/sps",
		color: "yellow",
		background: "black",
		fontFamily: "star-trek",
		gitHref:
			"https://github.com/mikeshort10/rock-paper-scissors-lizard-spock",
	},
];

export class Projects extends React.Component {
	renderProjects() {
		const arr = [];
		for (const project of projects) {
			const { color, background, fontFamily } = project;
			const style = { color, background, fontFamily };
			const inverted = { color: background, background: color };
			arr.push(
				<div key={project.name} className={cs("project-project")}>
					<div
						key={project.name}
						className={cs("project-logo")}
						style={style}
					>
						<h3>{project.name}</h3>
					</div>
					<div
						className="project-link"
						style={{
							background: color,
						}}
					>
						<a
							key="live"
							style={{
								color: inverted.color,
							}}
							href={project.href}
						>
							See Live
						</a>
						<a
							key="github"
							style={{
								color: inverted.color,
							}}
							target="_blank"
							rel="noopener noreferrer"
							href={project.gitHref}
						>
							Github Repo
						</a>
					</div>
				</div>,
			);
		}
		return arr;
	}
	render() {
		return (
			<div id="projects" className="text-center project-header">
				<h2>Recent Projects</h2>
				<div id="projects" className={cs("projects-container")}>
					{this.renderProjects()}
				</div>
			</div>
		);
	}
}
