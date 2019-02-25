import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import { SketchPicker } from "react-color";
import adapt from "../../utils/adapt";

const Container = styled.div`
  display: flex;

  [role="gridcell"] {
    overflow: visible;
  }
`;

const Swatch = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border: 1px solid #f8f8f8;
  border-radius: 14px;
  background: ${props =>
    `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${
      props.color.a
    })`};
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

class Popover extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.portalRoot = document.getElementById("portal-root");
    this.portalRoot.setAttribute("style", "position: absolute");
    this.el.setAttribute("style", "position: relative; z-index: 100");

    const position = props.parent.getBoundingClientRect();
    const scrollY =
      window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
    const scrollX =
      window.scrollX !== undefined ? window.scrollX : window.pageXOffset;
    const top = scrollY + position.top - 100;
    const left = scrollX + position.left + 50;

    this.position = { position: "absolute", top, left };
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    this.portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div style={this.position}>{this.props.children}</div>,
      this.el
    );
  }
}

class WrappedSketchPicker extends Component {
  handleClickOutside(evt) {
    this.props.onClickOutside();
  }

  render() {
    return <SketchPicker {...this.props} />;
  }
}

const OnClickOutsideSketchPicker = onClickOutside(WrappedSketchPicker);

class ColorPickerCell extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1"
    }
  };

  onClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  onClose = () => {
    this.setState({ displayColorPicker: false });
  };

  onChange = color => {
    this.setState({ color: color.rgb });
  };

  render() {
    const { children, col, isEditing, data, rowIndex, ...rest } = this.props;
    const { color, displayColorPicker } = this.state;
    return (
      <Container {...rest} key={rowIndex}>
        <Swatch
          ref={el => (this.swatch = el)}
          onClick={this.onClick}
          color={color}
        />
        {displayColorPicker ? (
          <Popover parent={this.swatch}>
            <OnClickOutsideSketchPicker
              color={color}
              onChange={this.onChange}
              onClickOutside={this.onClose}
            />
          </Popover>
        ) : null}
      </Container>
    );
  }
}

export default adapt(ColorPickerCell);
