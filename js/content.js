class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleGender = this.handleChange.bind(this);
    this.handleLanguage = this.handleGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this); // this.handleLastNameChange = this.handleLastNameChange.bind(this);
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
    this.setState({
      genderGroup: obj
    });
  }

  handleLanguage(event) {
    let obj = Object.assign(this.state.languageGroup);
    obj[event.target.value] = event.target.checked;
    this.setState({
      languageGroup: obj
    });
  }

  handleSubmit(event) {
    this.handleFirstNameChange;
    this.handleLastNameChange;
    this.handleEmailChange;
    this.handleAddressChange;
    this.handlePhoneChange;
  }

  handleFirstNameChange(event) {
    this.setState({
      firstname: event.target.value
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastname: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePhoneChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handleAddressChange(event) {
    this.setState({
      address: event.target.value
    });
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
    return React.createElement("div", {
      className: "container"
    }, React.createElement("h2", null, this.formHeader), React.createElement("form", null, React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "text",
      name: "firstname",
      placeholder: "Firstname",
      className: "form-control form-control-lg",
      onChange: this.handleChange
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "text",
      name: "lastname",
      placeholder: "Lastname",
      className: "form-control form-control-lg",
      onChange: this.handleChange
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "email",
      name: "email",
      placeholder: "Email",
      className: "form-control form-control-lg",
      onChange: this.handleChange
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "password",
      name: "password",
      placeholder: "Password",
      className: "form-control form-control-lg"
    })), React.createElement("div", {
      className: "form-inline"
    }, React.createElement("input", {
      type: "radio",
      name: "genderGroup",
      checked: this.state.genderGroup['female'],
      onChange: this.handleChange,
      className: "form-control mr-2"
    }), "Female"), React.createElement("div", {
      className: "form-inline"
    }, React.createElement("input", {
      type: "radio",
      name: "genderGroup",
      checked: this.state.genderGroup['male'],
      onChange: this.handleChange,
      className: "form-control mr-2"
    }), "Male"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "text",
      onChange: this.handleChange,
      placeholder: "Phone Number",
      className: "form-control"
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("textarea", {
      name: "address",
      className: "form-control",
      rows: "3",
      onChange: this.handleChange
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      className: "form-check",
      type: "checkbox",
      name: "languageGroup",
      checked: this.state.languageGroup['javascript'],
      onChange: this.handleChange
    }), "JavaScript"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      className: "form-check",
      type: "checkbox",
      name: "languageGroup",
      checked: this.state.languageGroup['ruby'],
      onChange: this.handleChange
    }), "Ruby"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      className: "form-check",
      type: "checkbox",
      name: "languageGroup",
      checked: this.state.languageGroup['go'],
      onChange: this.handleChange
    }), "Go"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      className: "form-check",
      type: "checkbox",
      name: "languageGroup",
      checked: this.state.languageGroup['php'],
      onChange: this.handleChange
    }), "PHP"), React.createElement("button", {
      onClick: this.handleSubmit,
      className: "btn btn-danger"
    }, "Register")), React.createElement(Display, {
      fname: this.state.firstname,
      lname: this.state.lastname,
      mail: this.state.email
    }));
  }

}