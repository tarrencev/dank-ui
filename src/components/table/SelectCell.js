import React from "react";
import styled from "@emotion/styled";

const SelectStyle = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;

  .sui-select-arrow {
    position: absolute;
    pointer-events: none;
    right: 0.625rem;
    width: 8px;
  }
`;

const Select = styled.select`
  width: 100%;
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`;

const Arrow = () => (
  <svg className="sui-select-arrow" viewBox="0 0 10 5">
    <g fill="none" fillRule="evenodd">
      <path d="M17 14H-7v-24h24" />
      <path fill="#000" opacity="0.85" d="M0 0l5 5 5-5" />
    </g>
  </svg>
);

const SelectCell = ({ children, col, isEditing, data, rowIndex, ...rest }) => (
  <SelectStyle key={rowIndex}>
    <Arrow />
    <Select {...rest}>{children}</Select>
  </SelectStyle>
);

SelectCell.displayName = "SelectCell";

export default SelectCell;
