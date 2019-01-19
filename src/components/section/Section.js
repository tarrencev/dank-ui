import React from "react";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  border-bottom: 1px solid #e2e2e2;
  margin: 20px 5px;
`;

const StyledSectionTitle = styled.div`
  color: #5f5f5f;
  font-weight: 400;
`;

const StyledSectionContent = styled.div`
  margin: 18px 0;
`;

const Section = ({ className = "", children, title }) => (
  <StyledSection className={`section ${className}`}>
    <StyledSectionTitle className="section-title">{title}</StyledSectionTitle>
    <StyledSectionContent className="section-content">
      {children}
    </StyledSectionContent>
  </StyledSection>
);

Section.displayName = "Section";

export default Section;
