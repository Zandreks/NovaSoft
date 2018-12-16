/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About/index"
import Servis from "./components/Servise/index"
import ActivityAreas from "./components/activityareas/index"

const scrolAutch = () => {
	window.scrollTo(0, 0)
	return true
}

const ScrollhRouter = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (scrolAutch() ? <Component {...props} /> : "")}
	/>
)

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<BrowserRouter>
					<div className="content2">
						<ScrollhRouter exact path="/" component={Home} />
						<ScrollhRouter path="/about" component={About} />
						<ScrollhRouter path="/servis" component={Servis} />
						<ScrollhRouter path="/ActivityAreas" component={ActivityAreas} />
					</div>
				</BrowserRouter>
			</div>
		)
	}
}
export default App
