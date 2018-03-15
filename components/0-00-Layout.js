import Head from "next/head";
import React from "react";

export default class extends React.Component {
  state = {};
  render() {
    const { title, children, ...rest } = this.props;
    return (
      <div className="bg-white" {...rest}>
        <Head>
          <title>{title}</title>
        </Head>
        {children}
      </div>
    );
  }
}
