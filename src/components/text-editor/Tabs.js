import React, { Component } from "react";
import styled from "@emotion/styled";

import Tab from "./Tab";

const Hidden = styled.div`
  display: none;
`;

const TabList = styled.ol`
  display: none;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <TabList>
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </TabList>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab)
              return (
                <Hidden key={child.props.label}>{child.props.children}</Hidden>
              );
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
