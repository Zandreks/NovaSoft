/* eslint-disable no-unused-vars */

import React from "react"
import bigimg1 from "./img/Картинка.png"
import bigimg2 from "./img/Картинка2.png"
import bigimg3 from "./img/Картинка3.png"

import { Link } from "react-router-dom"
export default class Servise extends React.Component {
	render() {
		return (
			<div className="row">
				<div
					className="col-md-12 col-sm-12 col-lg-4 ser wow zoomIn"
					data-wow-offset="250"
				>
					<div className="servHead">
						<h3>Разработка ПО</h3>
					</div>
					<div className="blokSer">
						<p className="pbold">
							Мы разрабатываем софт любой сложености в самые кратчайшие сроки.
						</p>
					</div>
					<div className="blokbtn">
						<Link to="/servis" type="button" className="btnpod">
							Читать дальше...
						</Link>
					</div>
				</div>
				<div
					className="col-md-12 col-sm-12 col-lg-4 ser wow zoomIn"
					data-wow-offset="250"
				>
					<div className="servHead">
						<h3>IT консалтинг</h3>
					</div>
					<div className="blokSer">
						<p className="pbold">
							Наши специалисты помогут оптимизировать любые бизнес-процессы
							ваших проектов.
						</p>
					</div>
					<div className="blokbtn">
						<Link to="/servis" type="button" className="btnpod">
							Читать дальше...
						</Link>
					</div>
				</div>
				<div
					className="col-md-12 col-sm-12 col-lg-4 ser wow zoomIn"
					data-wow-offset="250"
				>
					<div className="servHead">
						<h3 id="mobh">Серверные решения</h3>
					</div>
					<div className="blokSer">
						<p className="pbold">
							Мы предоставляем серверные решения с учетом специфики вашего
							бизнеса.
						</p>
					</div>
					<div className="blokbtn">
						<Link to="/servis" type="button" className="btnpod">
							Читать дальше...
						</Link>
					</div>
				</div>
				<div
					className="col-md-12 col-sm-12 col-lg-4 ser wow zoomIn"
					data-wow-offset="250"
				>
					<div className="servHead">
						<h3>Архитектура сетей</h3>
					</div>
					<div className="blokSer">
						<p className="pbold">
							Мы разрабатываем софт любой сложености в самые кратчайшие сроки.{" "}
						</p>
					</div>
					<div className="blokbtn">
						<Link to="/servis" type="button" className="btnpod">
							Читать дальше...
						</Link>
					</div>
					<div className="blokimg">
						<img src={bigimg1} className="img-fluid" alt="" />
					</div>
				</div>
				<div
					className="col-md-12 col-sm-12 col-lg-4 ser wow zoomIn"
					data-wow-offset="250"
				>
					<div className="servHead">
						<h3>Администрирование БД</h3>
					</div>
					<div className="blokSer">
						<p className="pbold">
							Наши специалисты помогут оптимизировать любые бизнес-процессы
							ваших проектов.
						</p>
					</div>
					<div className="blokbtn">
						<Link to="/servis" type="button" className="btnpod">
							Читать дальше...
						</Link>
					</div>
					<div className="blokimg">
						<img src={bigimg2} className="img-fluid" alt="" />
					</div>
				</div>
				<div
					className="col-md-12 col-sm-12 col-lg-4 ser wow zoomIn"
					data-wow-offset="250"
				>
					<div className="servHead">
						<h3 id="mobh">IT оборудование</h3>
					</div>
					<div className="blokSer">
						<p className="pbold">
							Мы предоставляем серверные решения с учетом специфики вашего
							бизнеса.
						</p>
					</div>
					<div className="blokbtn">
						<Link to="/servis" type="button" className="btnpod">
							Читать дальше...
						</Link>
					</div>
					<div className="blokimg">
						<img src={bigimg3} className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		)
	}
}
