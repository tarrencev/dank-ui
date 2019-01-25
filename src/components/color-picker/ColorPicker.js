import React, { Component } from "react";
import styled from "@emotion/styled";

import Button from "../button/Button";
import { BlockPicker } from "react-color";

const Container = styled.section`
  border: 1px solid #e8e8e8;
  border-radius: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Popover = styled.div`
  position: "absolute",
  z-index: 2
`;

const Cover = styled.div`
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
`;

export default class ColorPicker extends Component {
  state = {
    displayColorPicker: false,
    color: "#ffffff"
  };

  onClickHandler = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  onCloseHandler = () => {
    this.setState({ displayColorPicker: false });
  };

  onChangeHandler = color => {
    this.setState({ color: color.hex });
  };

  render() {
    const { color, displayColorPicker } = this.state;

    return (
      <Container>
        <Button onClick={this.onClickHandler}>Pick Color</Button>
        {displayColorPicker ? (
          <Popover>
            <Cover onClick={this.onCloseHandler} />
            <BlockPicker color={color} onChange={this.onChangeHandler} />
          </Popover>
        ) : null}
      </Container>
    );
  }
}
