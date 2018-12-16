/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { scroller } from "react-scroll"

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}
if (!Object.settings) {
	Object.defineProperty(Object, "assign", {
		enumerable: false,
		configurable: true,
		writable: true,
		value: function(target, firstSource) {
			if (target === undefined || target === null) {
				throw new TypeError("Cannot convert first argument to object")
			}

			var to = Object(target)
			for (var i = 1; i < arguments.length; i++) {
				var nextSource = arguments[i]
				if (nextSource === undefined || nextSource === null) {
					continue
				}

				var keysArray = Object.keys(Object(nextSource))
				for (
					var nextIndex = 0, len = keysArray.length;
					nextIndex < len;
					nextIndex++
				) {
					var nextKey = keysArray[nextIndex]
					var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
					if (desc !== undefined && desc.enumerable) {
						to[nextKey] = nextSource[nextKey]
					}
				}
			}
			return to
		}
	})
}

export default class Content extends React.Component {
	componentDidMount = () => {
		this.scrollTo()
	}
	scrollTo = () => {
		scroller.scrollTo("scroll", {
			duration: 800,
			delay: 0,
			smooth: "easeInOutQuart"
		})
	}

	render() {
		return (
			<div
				className="container sectiontarif wow zoomIn"
				id="scroll"
				data-wow-offset="250"
			>
				<Slider {...settings}>
					<div className="tarifcar">
						<h1>IT консалтинг</h1>
						<hr />
						<div className="row">
							<p>
								IT - консалтинг это целый ряд мероприятий, направленный на
								оптимизацию разработки новых или существующих проектов.
							</p>
							<p>
								​Очень важным этапом любого проекта является предпроектное
								планирование. Данное мероприятие помогает понять и своевременно
								запланировать все необходимые мероприятия для успешного
								внедрения проекта, а также оптимизировать финансовые и временные
								затраты.
							</p>
							<p>
								Анализ существующих проектов необходим для выявления
								уязвимостей, изъянов в бизнес процессах, критических точек и
								всевозможных факторов, мешающих успешной работе того или иного
								решения.​ Данный анализ позволяет исправить недостатки и
								значительно повысить эффективность действующего проекта.
							</p>
							<p>
								Наши специалисты помогут Вам оптимизировать проект на любой
								стадии, качественно и в короткие сроки.
							</p>
							<p>
								Пожалуйста задавайте все интересующие Вас вопросы в чате или
								отправьте нам запрос через форму обратной связи и наши
								специалисты свяжутся с Вами в самые кратчайшие сроки.
							</p>
						</div>
					</div>
					<div className="tarifcar">
						<h1>Разработка программного обеспечения</h1>
						<hr />
						<div className="row">
							<p>
								В настоящее время разработка и внедрение программного
								обеспечения является основной составляющей любого успешного
								бизнеса. Действительно, в наши дни сложно представить компанию,
								которая не использует IT технологии в своей повседневной
								деятельности. Для успешного функционирования необходимы такие
								насущные вещи как электронная почта, сайт компании, веб сервисы
								и многое другое. ​
							</p>
							<p>
								​Наша компания предоставляет услуги по разработке проектов любой
								сложности, от самых простых сервисов, до сложных информационных
								систем. Наши специалисты имеют многолетний опыт в разработке
								приложений в самых различных сферах и направлениях.​
							</p>
							<p>
								Мы сделаем все возможное для того, что бы подобрать команду
								специалистов, необходимую для реализации конкретно Вашего
								проекта, с учетом специфики вашей деятельности, бюджета и иных
								факторов, оказывающих влияние на успешную разработку и внедрение
								продукта, который поможет вам оптимизировать Ваши бизнес
								процессы и преобразить Ваш бизнес.
							</p>
							<p>
								​Пожалуйста задавайте все интересующие Вас вопросы в чате или
								отправьте нам запрос через форму обратной связи и наши
								специалисты свяжутся с Вами в самые кратчайшие сроки.
							</p>
						</div>
					</div>
					<div className="tarifcar">
						<h1>IT оборудование</h1>
						<hr />
						<div className="row">
							<p>
								Наша компания предлагает широкий выбор всевозможного IT
								оборудования по самым низким ценам.
							</p>
							<p>
								- Серверное оборудование
								<br /> - Программное обеспечение ​<br />- Сетевое и
								коммуникационное оборудование <br />
								​- Копировальная техника - Компьютеры и ноутбуки
							</p>
							<p>
								Наши специалисты будут рады сделать анализ оборудования,
								необходимого именно под ваш бизнес проект.
							</p>
							<p>
								Пожалуйста задавайте все интересующие Вас вопросы в чате или
								отправьте нам запрос через форму обратной связи и наши
								специалисты свяжутся с Вами в самые кратчайшие сроки.
							</p>
						</div>
					</div>
				</Slider>
			</div>
		)
	}
}
