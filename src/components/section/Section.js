import React from "react";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  margin: 20px 0;
`;

const StyledSectionTitle = styled.div`
  color: #000;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 0;
`;

const Section = ({ className = "", children, title, right }) => (
  <StyledSection className={`section ${className}`}>
    <StyledSectionTitle className="section-title">
      <div>{title}</div>
      <div>{right}</div>
    </StyledSectionTitle>
    <StyledSectionContent className="section-content">
      {children}
    </StyledSectionContent>
  </StyledSection>
);

Section.displayName = "Section";

export default Section;
