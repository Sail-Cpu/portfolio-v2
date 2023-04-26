import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionName from "../../components/SectionName";
import theme from "../../styles/Theme";
//Project
import AllProject from "../../content/Project";
//Icons
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledProject = styled.section`
  position: relative;
  margin-top: 650px;
  width: 100%;
  .slider-container {
    display: flex;
    width: 100%;
    padding-left: 50px;
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
  cursor: pointer;
`;
const StyledProjectContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: inherit;
  padding: 50px;

  h2 {
    position: absolute;
    top: -80px;
    right: 0;
    color: ${theme.colors.third};
  }

  .project-image {
    width: 60%;
    height: 100%;
    background-image: url("${(props) => props.active.image}");
    background-size: cover;
    background-position: center;
    .project-image-content {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.48);
      padding: 20px 20px;
      width: 100%;
      height: 100%;
    }
    .project-image-title {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 35px;
    }
    .project-image-description {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 20px;
      margin-top: 10px;
    }
    .project-image-techno {
      width: 100%;
      span {
        margin-right: 15px;
      }
      margin-top: 10px;
    }
    .project-image-git {
      margin-top: 10px;
    }
  }

  .project-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 40%;
    height: 100%;

    .project-title {
      display: flex;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      height: 50px;

      h1 {
        font-size: 2vw;
      }
    }
    .project-description {
      width: 140%;
      padding: 20px;
      background-color: ${theme.colors.primary};
      box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.25);
      color: ${theme.colors.fourth};
    }
    .techno {
      display: flex;
      align-items: center;
      width: 100%;
      height: 10%;
      padding: 0 20px;

      span {
        font-size: 15px;
        margin-right: 10px;
        color: ${theme.colors.fourth};
      }
      overflow-x: auto;
      white-space: nowrap;
      ::-webkit-scrollbar {
        height: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.fourth};
      }
    }

    .git {
      display: flex;
      align-items: center;
      width: 100%;
      height: 10%;
      padding: 0 20px;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 950px) {
    .project-image {
      width: 100%;
      .project-image-content {
        display: flex;
      }
    }

    .project-content {
      display: none;
    }
  }
`;

const Project = (props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeProject, setActiveProject] = useState({});

  useEffect(() => {
    setActiveProject(AllProject[activeIdx]);
  }, [activeIdx]);

  return (
    <StyledProject ref={props.position}>
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
                key={idx}
                onClick={() => setActiveIdx(idx)}
                active={activeIdx === idx}
              >
                {project.name}
              </StyledSlide>
            );
          })}
        </StyledSlider>
        <StyledProjectContent active={activeProject}>
          <h2>{activeProject.date}</h2>
          <div className="project-image">
            <div className="project-image-content">
              <div className="project-image-title">{activeProject.name}</div>
              <div className="project-image-description">
                {activeProject.description}
              </div>
              <div className="project-image-techno">
                {activeProject.techno &&
                  activeProject.techno.map((project, idx) => {
                    return <span key={idx}>{project}</span>;
                  })}
              </div>
              <div className="project-image-git">
                <GitHubIcon />
              </div>
            </div>
          </div>
          <div className="project-content">
            <div className="project-title">
              <h1>{activeProject.name}</h1>
            </div>
            <div className="project-description">
              {activeProject.description}
            </div>
            <div className="techno">
              {activeProject.techno &&
                activeProject.techno.map((project, idx) => {
                  return <span key={idx}>{project}</span>;
                })}
            </div>
            <div className="git">
              <GitHubIcon />
            </div>
          </div>
        </StyledProjectContent>
      </div>
    </StyledProject>
  );
};

export default Project;
