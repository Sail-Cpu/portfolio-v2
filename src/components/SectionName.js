import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

const StyledSectionName = styled.div`
  font-size: 30px;
  .sectionNameNb {
    color: ${theme.colors.third};
    margin-right: 15px;
  }
`;

const SectionName = (props) => {
  return (
    <StyledSectionName>
      <span className="sectionNameNb">{props.nb}.</span>
      <span>{props.name.toUpperCase()}</span>
    </StyledSectionName>
  );
};

export default SectionName;
