import React from "react";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  border-bottom: 1px solid #f1f1f1;
  margin: 20px 0;
`;

const StyledSectionTitle = styled.div`
  color: #5f5f5f;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSectionContent = styled.div`
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
