import React, { useState } from "react";
import styled from "styled-components";
import SectionName from "../../components/SectionName";
import theme from "../../styles/Theme";
//Project
import AllProject from "../../content/Project";

const StyledProject = styled.div`
  position: relative;
  top: 650px;
  width: 100%;
  .slider-container {
    width: 91%;
    margin: 0 auto;
  }
`;
const StyledProjectTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
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
const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  .slider-little-bar {
    width: 4px;
    height: 30px;
    background-color: ${theme.colors.secondary};
  }
`;
const StyledSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 70px;
  font-size: 25px;
  border-left: ${(props) =>
    props.active
      ? "4px solid" + theme.colors.third
      : "4px solid" + theme.colors.secondary};
  border-right: ${(props) =>
    props.active ? "4px solid" + theme.colors.third : ""};
  box-shadow: ${(props) =>
    props.active ? "0px 6px 15px rgba(0, 0, 0, 0.25)" : ""};
`;

const Project = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <StyledProject>
      <StyledProjectTop>
        <SectionName nb="03" name="Mes Projets" />
        <div className="project-bar-left"></div>
        <div className="project-bar-right"></div>
      </StyledProjectTop>
      <div className="slider-container">
        <StyledSlider>
          <div className="slider-little-bar"></div>
          {AllProject.map((project, idx) => {
            return (
              <StyledSlide
                onClick={() => setActiveProject(idx)}
                active={activeProject === idx}
              >
                {project.name}
              </StyledSlide>
            );
          })}
        </StyledSlider>
      </div>
    </StyledProject>
  );
};

export default Project;
