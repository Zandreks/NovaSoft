/* eslint-disable no-unused-vars */

import React from "react"
import Servise from "./Servise"
import Blok from "./Blok"
export default class ContentHome extends React.Component {
	render() {
		return (
			<section className="container content">
				<Servise />
				<Blok />
			</section>
		)
	}
}
