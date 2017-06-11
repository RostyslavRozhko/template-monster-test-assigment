import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAction } from "../actions";
import { getCurrentUserName } from "../selectors";

class LoginForm extends Component {
  state = {
    login: ""
  };

  handleChange = e => {
    this.setState({
      login: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.loginAction(this.state.login);
    e.preventDefault();
  };

  render() {
    return this.props.isLogined
      ? <div>Welcome, {this.props.name}</div>
      : <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="login"
            placeholder="Login"
            onChange={this.handleChange}
          />
          <input type="submit" value="Sign in" />
        </form>;
  }
}

LoginForm.propTypes = {
  isLogined: PropTypes.bool.isRequired,
  name: PropTypes.string
};

const mapStateToProps = state => ({
  isLogined: state.posts.isLogined,
  name: getCurrentUserName(state)
});

export default connect(mapStateToProps, { loginAction })(LoginForm);
