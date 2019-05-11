import React from "react";
import classNames from "classnames/bind";

const style = require("./index.css");
const cs = classNames.bind(style);

export function About(props) {
	return (
		<div id="about" className={"about-feed"}>
			<div className={cs("about-article")}>
				<div className={cs("about-text")}>
					<h3 className={cs("about-header")}>
						Hey! I'm Mike, a Full Stack Developer with over 3 years
						experience in web development
					</h3>
					<p>
						My journey to becoming a software developer is
						definitely not a conventional one. After graduating with
						a degree in Germanic Studies, I began working with
						international students. Finding that the school's
						software was often geared toward native speakers, I
						learn Javascript and develop applications that would
						help them more intuitively navigate life at the school,
						such as picking classes or getting involved in
						activities.
					</p>
					<p>
						From the moment I printed my first 'Hello World', I knew
						that this would become my full-time career. I left my
						position at the high school and started my own
						free-lance development company. Now I work with clients,
						either one-on-one or as part of team, turning their
						visions and dreams into realities.
					</p>
					<p>
						There are two main things you can expect from me when I
						agree to work with you: reliability and innovation. Your
						goals are important to me, and I will always deliver on
						the deadlines that we set, if not sooner. Your visions
						and ideas are also unique and shouldn't be approach with
						a cookie-cutter mentality. While I'm not going to
						reinvent the wheel, who wouldn't want to fly a
						hoverboard?
					</p>
					<p>
						But enough about me! I'd love to hear about you! What
						are you working on? What do you want to create? What's
						you story? Contact me on{" "}
						<a
							href="https://www.linkedin.com/in/michael-short-77389190"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						, or{" "}
						<a
							href="https://github.com/mikeshort10"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						, and let's start the conversation!
					</p>
				</div>
			</div>
		</div>
	);
}
