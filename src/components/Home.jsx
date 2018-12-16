/* eslint-disable no-unused-vars */
import React from "react"
import Nav from "./Navbar"
import Headerinfo from "./Headerinfo"
import Content from "./ContentHome"
import Footer from "./Footer"
class Home extends React.Component {
	render() {
		return (
			<div>
				<main>
					<div className="box-sh">
						<header>
							<Nav />
							<Headerinfo />
						</header>
					</div>
					<Content />
				</main>

				<Footer />
			</div>
		)
	}
}

export default Home
