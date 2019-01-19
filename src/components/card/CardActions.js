import React from "react";
import styled from "@emotion/styled";

const CardActions = styled.div`
  display: flex;
  padding: 5px;

  button {
    border: none;
    color: #000;
    letter-spacing: 0.15px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: Roboto, sans-serif;
    margin: 0px 8px 0px 0px;
    padding: 0px 10px;
  }

  button:hover {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
`;

export default CardActions;
