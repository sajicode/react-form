class Display extends React.Component {
  render() {
    return React.createElement("span", null, "Here are your details", React.createElement("br", null), "Firstname: ", this.props.fname, React.createElement("br", null), "Lastname: ", this.props.lname, React.createElement("br", null), "Email: ", this.props.mail, React.createElement("br", null));
  }

}