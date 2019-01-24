import React, { Children, Fragment } from "react";
import styled from "@emotion/styled";
import { ChevronRight } from "react-feather";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Breadcrumbs = ({ children }) => (
  <Container>
    {Children.map(children, (crumb, index) => {
      return !children.length || index === children.length - 1 ? (
        crumb
      ) : (
        <Fragment>
          {crumb}
          <ChevronRight height={20}/>
        </Fragment>
      );
    })}
  </Container>
);

export default Breadcrumbs;
