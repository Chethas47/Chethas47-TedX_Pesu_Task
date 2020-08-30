import React from "react";
import "./LandingPage.css";

function LadingPage() {
	return (
		<div className="LandingPage">
			<div className="ted-logo"></div>
			<p className="coming-to-you">
				Coming to you on <span className="date"> 10.10.20</span>
			</p>
			<p className="climate-change">Change climate change</p>
			<p className="placeholder-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
				odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
				quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
				mauris. Praesent mauris. Praesent mauris.
			</p>
			<button className="button">REGISTER</button>
			<div className="countdown-logo"></div>
		</div>
	);
}

export default LadingPage;
