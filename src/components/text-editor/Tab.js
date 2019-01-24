import React, { Component } from "react";
import styled from "@emotion/styled";

const Tab = styled.li`
  display: none;
`;

export default class extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <Tab className={className} onClick={onClick}>
        {label}
      </Tab>
    );
  }
}
