/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "./img/Логотип.png"
import { Link, animateScroll as scroll } from "react-scroll"
export default class Navbar extends React.Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-expand-lg   navbar-dark  rounded">
					<NavLink className="navbar-brand" to="/">
						<img src={Logo} className="rounded " alt="" />
					</NavLink>
					<button
						className="navbar-toggler  custom-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item ">
								<NavLink
									exact
									to="/"
									activeClassName="active"
									className="nav-link"
								>
									Главная
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/about"
									activeClassName="active"
									className="nav-link"
								>
									О нас
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/servis"
									activeClassName="active"
									className="nav-link"
								>
									Наши услуги
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/ActivityAreas"
									activeClassName="active"
									className="nav-link"
								>
									Сферы деятнельности
								</NavLink>
							</li>
							<li className="nav-item">
								<Link
									to="test1"
									spy={true}
									className="nav-link"
									smooth={true}
									duration={500}
								>
									Обратная связь
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
