import React, { Children, Fragment } from "react";
import styled from "styled-components";
import CaretIcon from "../icons/CaretIcon";

const Container = styled.div`
  display: flex;
`

const Breadcrumbs = ({ children }) => (
  <Container>
    {Children.map(children, (crumb, index) => {
      return index === children.length - 1 ? (
        crumb
      ) : (
        <Fragment>
          {crumb}
          <CaretIcon />
        </Fragment>
      );
    })}
  </Container>
);

export default Breadcrumbs;
