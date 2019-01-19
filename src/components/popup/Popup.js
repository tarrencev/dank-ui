import React from "react";
import ReactPopup from "reactjs-popup";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 15px 20px;
`;

const Header = styled.div`
  color: #494949;
  font-size: 17px;
  margin-bottom: 15px;
`;

const Popup = ({ title, children, actions, ...rest }) => (
  <ReactPopup
    className="ignore-react-onclickoutside"
    {...rest}
    contentStyle={{ width: "auto" }}
  >
    <Container>
      {title ? <Header>{title}</Header> : null}
      {children}
    </Container>
  </ReactPopup>
);
export default Popup;
