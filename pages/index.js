import React, { Component } from "react";
import { getUsers } from "@actions"
import withRedux from "@store"

@withRedux
export default class extends Component {
  state = {};

  componentDidMount() {
    const { dispatch } = this.props
    console.info(123)
    dispatch(getUsers())
  }
  render() {
    return <div className="c-main">123</div>;
  }
}
