import React from "react"
import img from "./img/Картинка.png"
import img2 from "./img/Слой 15.png"
import img3 from "./img/Слой 16.png"
import img4 from "./img/Слой 17.png"
export default class Slider extends React.Component {
	render() {
		return (
			<div
				className="col-md-12 col-sm-12 col-lg-8 slid wow fadeInRight"
				data-wow-offset="250"
			>
				<div id="demo" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={img} alt="Los Angeles" width="1100" height="500" />
							<div className="carousel-caption">
								<p>Мы делаем проекты от начала до конца</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={img2} alt="Chicago" width="1100" height="500" />
							<div className="carousel-caption">
								<p>Почему выбирают именно нас?</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={img3} alt="New York" width="1100" height="500" />
							<div className="carousel-caption">
								<p>Время - деньги</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={img4} alt="New York" width="1100" height="500" />
							<div className="carousel-caption">
								<p>Мы идём в ногу со временем</p>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-control-prev-icon" />
					</a>
					<a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-control-next-icon" />
					</a>
				</div>
			</div>
		)
	}
}
