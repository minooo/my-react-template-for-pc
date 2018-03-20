import React, { Component } from "react";
import { getUsers } from "@actions";
import withRedux from "@store";

@withRedux
export default class extends Component {
  state = {};

  componentDidMount() {
    const { dispatch } = this.props
    console.info(123)
    dispatch(getUsers())
  }
  // async componentDidMount() {
  //   const response = JSON.stringify(
  //     await window
  //       .fetch("/api/users")
  //       .then(response => response.json().then(data => data)),
  //     null,
  //     2
  //   );
  // }
  render() {
    return <div className="c-main">123</div>;
  }
}
