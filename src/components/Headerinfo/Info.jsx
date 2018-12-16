/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"
export default class Info extends React.Component {
	render() {
		return (
			<div
				className="col-md-12 col-sm-12 col-lg-4 info wow fadeInLeft"
				data-wow-offset="250"
			>
				<h1 className="infoHeader">Мы делаем IT</h1>
				<h3>для Вашего Бизнеса</h3>
				<p>
					Спасибо, что зашли на наш сайт.
					<br />
					<br />
					Наша компания предоставляет качественные услуги в области IT
					технологий.
				</p>
				<div className="bunheader">
					<Link to="/about" className="LinkHeader">
						Читать дальше
					</Link>
				</div>
			</div>
		)
	}
}
