import React from "react";
import styled from "styled-components";
import SectionName from "../../components/SectionName";
import theme from "../../styles/Theme";

const StyledProject = styled.div`
  position: relative;
  top: 650px;
  width: 100%;
`;

const StyledProjectTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .project-bar-left {
    margin-left: 20px;
    width: 20%;
    height: 2px;
    background-color: ${theme.colors.fourth};
  }
  .project-bar-right {
    position: absolute;
    right: 0;
    width: 40%;
    height: 2px;
    background-color: ${theme.colors.fourth};
  }
`;

const Project = () => {
  return (
    <StyledProject>
      <StyledProjectTop>
        <SectionName nb="03" name="Mes Projets" />
        <div className="project-bar-left"></div>
        <div className="project-bar-right"></div>
      </StyledProjectTop>
    </StyledProject>
  );
};

export default Project;
