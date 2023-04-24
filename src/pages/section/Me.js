import React from "react";
import styled from "styled-components";
//Components
import SectionName from "../../components/SectionName";

const StyledMe = styled.section`
  margin-top: 150px;
  width: 100%;
  height: 100vh;
  min-height: 650px;
  max-height: 820px;
`;

const Me = () => {
  return (
    <StyledMe>
      <SectionName nb="01" name="Moi" />
    </StyledMe>
  );
};

export default Me;
