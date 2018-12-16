/* eslint-disable no-unused-vars */
import React from "react"
import axios from "axios"
import ScrollTop from "../ScrollTop/index"
import { Element, animateScroll as scroll } from "react-scroll"
export default class Footer extends React.Component {
	state = {
		name: "",
		emaIL: "",
		text: "",
		errorClass: "is-invalid",
		errorClassMess: "invalid-feedback",
		validClass: "is-valid",
		validClassMess: "valid-feedback",
		messName: "",
		messEmail: "",
		errorName: "",
		errorEmail: ""
	}

	SenSubmit = e => {
		e.preventDefault()
		if (this.state.name === "") {
			this.setState({
				errorName: true,
				messName: "Введите Ваше имя!"
			})
			return false
		} else {
			this.setState({
				errorName: false,
				messName: "Поле коректно"
			})
		}
		let email = this.state.emaIL
		let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
		if (reg.test(email) === false) {
			this.setState({
				errorEmail: true,
				messEmail: "Введите корректный e-mail"
			})
			return false
		} else {
			this.setState({
				errorEmail: false,
				messEmail: "Поле коректно"
			})
		}
		axios
			.post("/dev/post.php", {
				name: this.state.name,
				email: this.state.emaIL,
				text: this.state.text
			})
			.then(response => {
				if (response.data === "ok") {
					global.alert("Спасибо ваше письмо отправлено")
					this.setState({
						errorEmail: "",
						messEmail: "",
						errorName: "",
						messName: ""
					})
					global.document.getElementById("name").value = ""
					global.document.getElementById("email").value = ""
					global.document.getElementById("text").value = ""
				} else {
					global.alert(response.data)
				}
			})
			.catch(function(error) {
				global.console.log(error)
				global.alert("Что-то пошло не так")
			})
	}

	render() {
		return (
			<footer>
				<Element name="test1" className="element" />
				<div className="container wow zoomIn" data-wow-offset="250">
					<div className="textFooter">
						<div className="text-center footer-title">Обратная связь:</div>
						<form onSubmit={this.SenSubmit}>
							<div className="form-row">
								<div className="col">
									<input
										type="text"
										className={
											this.state.errorName === true
												? `form-control ${this.state.errorClass}`
												: this.state.errorName === false
													? `form-control ${this.state.validClass}`
													: "form-control"
										}
										placeholder="Ваше имя*"
										id="name"
										onChange={e =>
											this.setState({
												name: e.target.value
											})
										}
									/>
									<div
										className={
											this.state.errorName === true
												? ` ${this.state.errorClassMess}`
												: this.state.errorName === false
													? ` ${this.state.validClassMess}`
													: ""
										}
									>
										{this.state.messName}
									</div>
								</div>
								<div className="col">
									<input
										type="email"
										id="email"
										className={
											this.state.errorEmail === true
												? `form-control ${this.state.errorClass}`
												: this.state.errorEmail === false
													? `form-control ${this.state.validClass}`
													: "form-control"
										}
										placeholder="Email*"
										onChange={e =>
											this.setState({
												emaIL: e.target.value
											})
										}
									/>
									<div
										className={
											this.state.errorEmail === true
												? ` ${this.state.errorClassMess}`
												: this.state.errorEmail === false
													? ` ${this.state.validClassMess}`
													: ""
										}
									>
										{this.state.messEmail}
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="col">
									<input
										type="text"
										id="text"
										className="form-control"
										placeholder="Сообщение"
										onChange={e =>
											this.setState({
												text: e.target.value
											})
										}
									/>
								</div>
							</div>
							<div className="text-center mt-3">
								<button type="submit" className="btn btn-dark btn-block">
									Отправить
								</button>
							</div>
						</form>

						<div className="footerInfo row">
							<p className="col-md-4">
								Адрес: РК, г. Алматы, Проспект Сейфуллина 597А, тел.:
							</p>
							<p className="col-md-4">
								<a href="tel:+77771242280">+7(777) 124-22-80</a>
							</p>
							<p className="col-md-4">
								<span>
									<a href="mailto:info@nsckz.com">info@nsckz.com</a>{" "}
								</span>
							</p>
						</div>
						<p className="text-center">© 2018 NovaSoft</p>
					</div>
				</div>
				<ScrollTop />
			</footer>
		)
	}
}
