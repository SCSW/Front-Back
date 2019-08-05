import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}
	get_user = async () => {
		axios.get("http://localhost:3001/api/users").then((res, error) => {
			if (res.data) {
				console.log(res.data);
			}
		});
	};

	log_in = async () => {
		axios
			.post("http://localhost:3001/login", {
				email: this.state.email,
				password: this.state.password
			})
			.then((res, err) => {
				if (res.data === "Hello") {
					window.alert("Fuck You!");
				} else {
					window.alert(res.data);
				}
			});
	};
	render() {
		return (
			<div>
				<button onClick={e => this.get_user()}>GEt user</button>
				<form onSubmit={e => e.preventDefault()}>
					<input
						type="text"
						placeholder="email"
						onChange={e => this.setState({ email: e.target.value })}
					/>
					<input
						type="text"
						placeholder="password"
						onChange={e => this.setState({ password: e.target.value })}
					/>
					<button onClick={e => this.log_in()}>Log In</button>
				</form>
			</div>
		);
	}
}
