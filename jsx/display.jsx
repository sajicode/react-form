class Display extends React.Component {
	render() {
		return (
			<span>
				Here are your details
				<br />
				Firstname: {this.props.fname}
				<br />
				Lastname: {this.props.lname}
				<br />
				Email: {this.props.mail}
				<br />
			</span>
		);
	}
}
