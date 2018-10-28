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
		this.handleFirstNameChange;
		this.handleLastNameChange;
		this.handleEmailChange;
		this.handleAddressChange;
		this.handlePhoneChange;
	}
	handleFirstNameChange(event) {
		this.setState({ firstname: event.target.value });
	}
	handleLastNameChange(event) {
		this.setState({ lastname: event.target.value });
	}
	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}
	handlePhoneChange(event) {
		this.setState({ phoneNumber: event.target.value });
	}
	handleAddressChange(event) {
		this.setState({ address: event.target.value });
	}
	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
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
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="lastname"
							placeholder="Lastname"
							className="form-control form-control-lg"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="form-control form-control-lg"
							onChange={this.handleChange}
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
							checked={this.state.genderGroup['female']}
							onChange={this.handleChange}
							className="form-control mr-2"
						/>
						Female
					</div>
					<div className="form-inline">
						<input
							type="radio"
							name="genderGroup"
							checked={this.state.genderGroup['male']}
							onChange={this.handleChange}
							className="form-control mr-2"
						/>
						Male
					</div>
					<div className="form-group">
						<input
							type="text"
							onChange={this.handleChange}
							placeholder="Phone Number"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<textarea name="address" className="form-control" rows="3" onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							checked={this.state.languageGroup['javascript']}
							onChange={this.handleChange}
						/>
						JavaScript
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							checked={this.state.languageGroup['ruby']}
							onChange={this.handleChange}
						/>
						Ruby
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							checked={this.state.languageGroup['go']}
							onChange={this.handleChange}
						/>
						Go
					</div>
					<div className="form-group">
						<input
							className="form-check"
							type="checkbox"
							name="languageGroup"
							checked={this.state.languageGroup['php']}
							onChange={this.handleChange}
						/>
						PHP
					</div>
					<button onClick={this.handleSubmit} className="btn btn-danger">
						Register
					</button>
				</form>
				<Display fname={this.state.firstname} lname={this.state.lastname} mail={this.state.email} />
			</div>
		);
	}
}
