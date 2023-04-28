import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import {
  Skills as SkillsContent,
  TechnoSkills,
  ToolsSkills,
} from "../../content/Skills";
import SectionName from "../../components/SectionName";

const StyledSkillsContainer = styled.section`
  margin-top: 150px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  .slider-skills {
    margin: 30px 0;
    width: 100%;
    display: flex;
  }
  .slide-skill-to-left {
    display: flex;
    white-space: nowrap;
    animation: rightToLeft 25s linear infinite;
    @keyframes rightToLeft {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
  .slide-skill-to-right {
    display: flex;
    white-space: nowrap;
    animation: LeftToRight 25s linear infinite;
    @keyframes LeftToRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  }
  .skills-top {
    width: 70%;
    max-width: 1200px;
    margin: 0 auto;
    .skills-bar-horizontal {
      width: 2px;
      height: 60px;
      background-color: ${theme.colors.fourth};
    }
    .skills-bar-vertical {
      display: flex;
      .skills-bar-vertical-1 {
        width: ${(props) => props.nbWidth + "px"};
        height: 2px;
        background-color: ${theme.colors.fourth};
      }
      .skills-bar-vertical-2 {
        margin-left: 15px;
        width: ${(props) => props.nameWidth + "px"};
        height: 2px;
        background-color: ${theme.colors.fourth};
      }
    }
  }
`;

const StyledSkill = styled.div`
  display: flex;
  margin-right: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: fit-content;
  background-color: ${theme.colors.primary};
  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.2);
  font-size: 30px;
  span {
    margin-right: 25px;
  }
  img {
    height: 40px;
  }
  @media screen and (max-width: 900px) {
    font-size: 15px;
    img {
      height: 20px;
    }
  }
`;

const Skills = (props) => {
  const [nbWidth, setNbWidth] = useState(0);
  const [nameWidth, setNameWidth] = useState(0);

  return (
    <StyledSkillsContainer
      ref={props.position}
      nbWidth={nbWidth}
      nameWidth={nameWidth}
    >
      <div className="skills-top">
        <SectionName
          nb="02"
          name={SkillsContent.name}
          setNbWidth={setNbWidth}
          setNameWidth={setNameWidth}
        />
        <div className="skills-bar-vertical">
          <div className="skills-bar-vertical-1"></div>
          <div className="skills-bar-vertical-2"></div>
        </div>
        <div className="skills-bar-horizontal"></div>
      </div>
      <div className="slider-skills">
        {[...Array(3)].map((_, idx) => {
          return (
            <div key={idx} className="slide-skill-to-left">
              {TechnoSkills.map((skill, idx) => {
                return (
                  <StyledSkill key={idx}>
                    <span>{skill.name.toUpperCase()}</span>
                    <img src={skill.icon} alt={skill.name + " icon"} />
                  </StyledSkill>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="slider-skills">
        {[...Array(3)].map((_, idx) => {
          return (
            <div key={idx} className="slide-skill-to-right">
              {ToolsSkills.map((skill, idx) => {
                return (
                  <StyledSkill key={idx}>
                    <span>{skill.name.toUpperCase()}</span>
                    <img src={skill.icon} alt={skill.name + " icon"} />
                  </StyledSkill>
                );
              })}
            </div>
          );
        })}
      </div>
    </StyledSkillsContainer>
  );
};

export default Skills;
