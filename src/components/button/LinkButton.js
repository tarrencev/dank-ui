import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import Button from "./Button";

const activeClassName = "nav-item-active";

const StyledLinkButton = Button.withComponent(NavLink);

const LinkButton = ({ isLoading, children, ...rest }) =>
  isLoading ? (
    <Button isLoading />
  ) : (
    <StyledLinkButton {...rest}>{children}</StyledLinkButton>
  );

export default LinkButton;
