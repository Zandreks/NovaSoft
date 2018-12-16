/* eslint-disable no-undef */
import React from "react"
import { animateScroll as scroll } from "react-scroll"

export default class ScrollTop extends React.Component {
	render() {
		return (
			<div id="toTop">
				<img src="/img/38.png" onClick={this.scrollToTop} alt="" />
			</div>
		)
	}
	scrollToTop = () => {
		scroll.scrollToTop()
	}
	componentDidMount() {
		window.onscroll = () => {
			let scrolled = window.pageYOffset || document.documentElement.scrollTop

			if (scrolled > 100) {
				document.getElementById("toTop").style.display = "block"
			} else {
				document.getElementById("toTop").style.display = "none"
			}
		}
	}
}
