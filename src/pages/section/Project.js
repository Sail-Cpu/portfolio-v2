import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SectionName from "../../components/SectionName";
import theme from "../../styles/Theme";
//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import { firebaseContext } from "../../contexts/firebaseContext";
import useContent from "../../hook/useContent";
import { themeContext } from "../../contexts/themeContext";

const StyledProject = styled.section`
  position: relative;
  width: 100%;
  .slider-container {
    display: flex;
    width: 100%;
    padding-left: 50px;
  }
  @media screen and (max-width: 700px) {
    .slider-container {
      flex-direction: column;
      padding-left: 0;
    }
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
  width: auto;
  .slider-little-bar {
    width: 4px;
    height: 30px;
    background-color: ${theme.colors.secondary};
  }
  @media screen and (max-width: 700px) {
    flex-direction: row;
    width: 100%;
    .slider-little-bar {
      display: none;
    }
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.fourth};
    }
  }
`;
const StyledSlide = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 15px 20px;
  width: 100%;
  border-left: ${(props) =>
    props.active
      ? "4px solid" + theme.colors.third
      : "4px solid" + theme.colors.secondary};
  border-right: ${(props) =>
    props.active ? "4px solid" + theme.colors.third : ""};
  box-shadow: ${(props) =>
    props.active ? "0px 6px 15px rgba(0, 0, 0, 0.25)" : ""};
  cursor: pointer;
  @media screen and (max-width: 950px) {
    font-size: 18px;
  }
  @media screen and (max-width: 700px) {
    border-right: none;
    font-size: 13px;
    border-left: none;
    border-bottom: ${(props) =>
      props.active
        ? "4px solid" + theme.colors.third
        : "4px solid" + theme.colors.secondary};
    margin-bottom: 10px;
  }
`;

const path = "/uploads/img"

const StyledProjectContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 50px 20px;
  min-height: 350px;
  h2 {
    position: absolute;
    top: -80px;
    right: 0;
    color: ${theme.colors.third};
  }
  .project-image {
    width: 60%;
    height: 100%;
    max-height: 250px;
    background-image: url("${(props) => path + "/" + props.active.image}");
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
      font-family: sans-serif;
      p{
        margin-top: 5px;
        color: #fff;
      }
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
      margin-top: 5px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 10%;
      padding: 0 20px;
      font-size: 30px;
      a {
        display: flex;
        align-items: center;
        transition: 0.4s ease;
        color: ${theme.colors.secondary};
        margin-right: 10px;
      }
      a:hover {
        color: ${theme.colors.third};
      }
      span{
        font-size: 17px;
      }
    }
  }
  @media screen and (max-width: 950px) {
    padding: 10px;
    .project-image {
      width: 100%;
      .project-image-content {
        display: flex;
        .project-image-git{
          display: flex;
          a{
            display: flex;
            align-items: center;
            margin-right: 10px;
            transition: 0.4s ease;
          }
          a:hover {
            color: ${theme.colors.third};
          }
        }
      }
    }
    .project-content {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    margin-top: 10px;
    padding: 0;
    width: 100%;
    h2 {
      display: none;
    }
  }
`;

const Project = (props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const {userData} = useContext(firebaseContext);
  const {language} = useContext(themeContext);
  const content = useContent(userData, "projects",  true)
  const [name, setName] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeProjectDesc, setActiveProjectDesc] = useState("");
 
  useEffect(() => {
    if(userData && content){
      setActiveProject(content[activeIdx]);
      setName(userData.nav[language.name].link3)
      setActiveProjectDesc(userData.projects[activeIdx].description[language.name]);
    }
  }, [
    activeIdx,
    language.name,
    content
  ]);

  return (
    <StyledProject ref={props.position}>
      {
        content && name && activeProject &&
          <>
            <StyledProjectTop>
              <SectionName nb="03" name={name} />
              <div className="project-bar-left"></div>
              <div className="project-bar-right"></div>
            </StyledProjectTop>
            <div className="slider-container">
              <StyledSlider>
                <div className="slider-little-bar"></div>
                {content.map((project, idx) => {
                  return (
                    <StyledSlide
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      active={activeIdx === idx}
                    >
                      <span>{project.name}</span>
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
                      {activeProjectDesc}
                    </div>
                    <div className="project-image-techno">
                      {activeProject.techno &&
                        activeProject.techno.map((project, idx) => {
                          return <span key={idx}>{project}</span>;
                        })}
                    </div>
                    <div className="project-image-git">
                      <a target="_blank" href={activeProject.git} rel="noreferrer">
                        <GitHubIcon />
                      </a>
                      {activeProject?.link &&
                          <a target="_blank" href={activeProject?.link} rel="noreferrer">
                            <span>Le Site</span>
                          </a>
                      }
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-title">
                    <h1>{activeProject.name}</h1>
                  </div>
                  <div className="project-description">
                    {activeProjectDesc}
                  </div>
                  <div className="techno">
                    {activeProject.techno &&
                      activeProject.techno.map((project, idx) => {
                        return <span key={idx}>{project}</span>;
                      })}
                  </div>
                  <div className="git">
                    <a target="_blank" href={activeProject.git} rel="noreferrer">
                      <GitHubIcon />
                    </a>
                    {activeProject?.link &&
                        <a target="_blank" href={activeProject?.link} rel="noreferrer">
                          <span>Le Site</span>
                        </a>
                    }
                  </div>
                </div>
              </StyledProjectContent>
            </div>
          </>
      }
    </StyledProject>
  );
};

export default Project;
