import React, { Component } from "react";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <label>
          Podaj login
          <input type="text" />
        </label>
        <label>
          Podaj haslo
          <input type="password" />
        </label>
        <button>Zaloguj</button>
      </div>
    );
  }
}

export default LoginPage;
