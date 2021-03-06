import React from "react";
import { Store } from "../context/index.js";
import ThemeToggle from "../themeToggle/index.js";
import Card from "../card/index.js";

var { useContext } = React;

var gridStyles = {
	maxWidth: "1280px",
	margin: "auto",
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minMax(240px,1fr))",
	gridGap: "40px",
	marginTop: "60px",
};

const Index = (props) => {
	var [state, setState] = useContext(Store);
	return (
		<div
			style={{
				padding: "60px",
				minHeight: "100vh",
				margin: "auto",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: state.selectedTheme.background,
			}}
		>
			{/* ... h1 tag and styles here */}
			{/* ... p tag and styles here */}
			<ThemeToggle />
			<div style={gridStyles}>
				<Card>
					<h3>Working with React Context</h3>
					here is my content just showing up as needed
				</Card>
				<Card>
					<h3>Using hooks in React</h3>
					here is my content just showing up as needed
				</Card>
			</div>
			<div style={gridStyles}>
				<Card>
					<h3>How to achieve global state</h3>
					here is my content just showing up as needed
				</Card>
				<Card>
					<h3>Switch color themes with ease</h3>
					here is my content just showing up as needed
				</Card>
			</div>
		</div>
	);
};
export default Index;
