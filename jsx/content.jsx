class Content extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleGender = this.handleChange.bind(this);
		this.handleLanguage = this.handleGender.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		// this.handleLastNameChange = this.handleLastNameChange.bind(this);
		// this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.formHeader = 'Please fill out the form below';
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			phoneNumber: '',
			address: '',
			genderGroup: {
				female: true,
				male: false
			},
			languageGroup: {
				javascript: false,
				ruby: true,
				go: false,
				php: false
			}
		};
	}
	handleGender(event) {
		let obj = {};
		obj[event.target.value] = event.target.checked;
		this.setState({ genderGroup: obj });
	}
	handleLanguage(event) {
		let obj = Object.assign(this.state.languageGroup);
		obj[event.target.value] = event.target.checked;
		this.setState({ languageGroup: obj });
	}
	handleSubmit(event) {
		console.log(event.target.value, event.target.checked);
		// this.setState({ firstname: event.target.value });
	}
	handleFirstNameChange(event) {
		this.setState({ firstname: event.target.value });
	}
	// handleLastNameChange(event) {
	// 	this.setState({ lastname: event.target.value });
	// }
	// handleEmailChange(event) {
	// 	this.setState({ email: event.target.value });
	// }
	handlePhoneChange(event) {
		this.setState({ phoneNumber: event.target.value });
	}
	handleAddressChange(event) {
		this.setState({ address: event.target.value });
	}
	handleChange(event) {
		console.log('onChange event: ', event.target.value, event.target.checked);
	}

	render() {
		return (
			<div className="container">
				<h2>{this.formHeader}</h2>
				<form>
					<div className="form-group">
						<input
							type="text"
							name="firstname"
							placeholder="Firstname"
							className="form-control form-control-lg"
							onChange={this.handleFirstNameChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="lastname"
							placeholder="Lastname"
							className="form-control form-control-lg"
							onChange={this.handleLastNameChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="form-control form-control-lg"
							onChange={this.handleEmailChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="form-inline">
						<input
							type="radio"
							name="genderGroup"
							value="female"
							checked={this.state.genderGroup['female']}
							onChange={this.handleGender}
							className="form-control mr-2"
						/>
						Female
					</div>
					<div className="form-inline">
						<input
							type="radio"
							name="genderGroup"
							value="male"
							checked={this.state.genderGroup['male']}
							onChange={this.handleGender}
							className="form-control mr-2"
						/>
						Male
					</div>
					<div className="form-group">
						<input
							type="text"
							onChange={this.handlePhoneChange}
							placeholder="Phone Number"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<textarea
							name="address"
							className="form-control"
							rows="3"
							onChange={this.handleAddressChange}
						/>
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							value="javascript"
							checked={this.state.languageGroup['javascript']}
							onChange={this.handleLanguage}
						/>
						JavaScript
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							value="ruby"
							checked={this.state.languageGroup['ruby']}
							onChange={this.handleLanguage}
						/>
						Ruby
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							value="go"
							checked={this.state.languageGroup['go']}
							onChange={this.handleLanguage}
						/>
						Go
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							value="php"
							checked={this.state.languageGroup['php']}
							onChange={this.handleLanguage}
						/>
						PHP
					</div>
					<button onClick={this.handleSubmit} className="btn btn-danger">
						Register
					</button>
				</form>
				<Display fname={this.state.firstname} />
			</div>
		);
	}
}
