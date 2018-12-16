/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react"
import Info from "./Info"
import Slider from "./Slider"

export default class Headernfo extends React.Component {
	render() {
		return (
			<div className="header-infoblok">
				<div className="container ">
					<div className="row">
						<Info />
						<Slider />
					</div>
				</div>
			</div>
		)
	}
}
