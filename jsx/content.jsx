class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
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
						<input type="number" onChange={this.handleChange} placeholder="Phone Number" />
					</div>
					<div className="form-group">
						<textarea name="address" className="form-control" rows="3" onChange={this.handleChange} />
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
					<div className="form-group">
						<a className="btn btn-primary" value="Submit" onClick={this.handleSubmit}>
							Submit
						</a>
					</div>
				</form>
			</div>
		);
	}
}
