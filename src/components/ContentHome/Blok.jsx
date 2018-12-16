/* eslint-disable no-unused-vars */

import React from "react"
import { Link } from "react-router-dom"

export default class Blok extends React.Component {
	render() {
		return (
			<div className="row wow bounceInRight" data-wow-offset="250">
				<div className="col-md-12 blokimgfon">
					<img src="./img/fon.png" className="img-fluid" alt="" />

					<div className="opisanimgblok">
						<h3>Ценовое предложение</h3>
						<p>
							Вы можете отправить нам техническое задание и наши специалисты
							<br />
							подготовят ценовое предложение в кратчайшие сроки
						</p>
					</div>
					<div className="btnblok">
						<Link to="/ActivityAreas" type="button" className="btnpod2">
							Сделать запрос...
						</Link>
					</div>
				</div>
			</div>
		)
	}
}
