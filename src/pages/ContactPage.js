import React, { Component } from "react";
import "../styles/Contact.css";
import { Prompt } from "react-router-dom";

class ContactPage extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div className="contact">
        <form>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <button onClick={this.handleSubmit}>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value !== ""}
          message="Masz nie wysłany formularz"
        />
      </div>
    );
  }
}

export default ContactPage;
