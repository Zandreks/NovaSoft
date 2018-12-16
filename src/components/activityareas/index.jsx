/* eslint-disable no-unused-vars */
import React from "react"
import Nav from "../Navbar"
import Content from "./Content"
import Headerinfo from "../Headerinfo"

import Footer from "../Footer"
export default class Index extends React.Component {
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
