import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CrumbLink = styled(Link)`
  color: #424242;
  font-size: 20px;
  text-decoration: none;
`;

const Crumb = styled.div`
  color: #424242;
  font-size: 20px;
  text-decoration: none;
`;

export default ({ to, ...rest }) =>
  !!to ? <CrumbLink to={to} {...rest} /> : <Crumb {...rest} />;
