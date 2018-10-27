class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      value: "female",
      checked: this.state.genderGroup['female'],
      onChange: this.handleGender,
      className: "form-control mr-2"
    }), "Female"), React.createElement("div", {
      className: "form-inline"
    }, React.createElement("input", {
      type: "radio",
      name: "genderGroup",
      value: "male",
      checked: this.state.genderGroup['male'],
      onChange: this.handleGender,
      className: "form-control mr-2"
    }), "Male"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "number",
      onChange: this.handleChange,
      placeholder: "Phone Number"
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
      value: "javascript",
      checked: this.state.languageGroup['javascript'],
      onChange: this.handleLanguage
    }), "JavaScript"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      className: "form-check",
      type: "checkbox",
      name: "languageGroup",
      value: "ruby",
      checked: this.state.languageGroup['ruby'],
      onChange: this.handleLanguage
    }), "Ruby"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      className: "form-check",
      type: "checkbox",
      name: "languageGroup",
      value: "go",
      checked: this.state.languageGroup['go'],
      onChange: this.handleLanguage
    }), "Go"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      className: "form-check",
      type: "checkbox",
      name: "languageGroup",
      value: "php",
      checked: this.state.languageGroup['php'],
      onChange: this.handleLanguage
    }), "PHP"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("a", {
      className: "btn btn-primary",
      value: "Submit",
      onClick: this.handleSubmit
    }, "Submit"))));
  }

}