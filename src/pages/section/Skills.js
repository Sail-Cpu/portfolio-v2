import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import { TechnoSkills, ToolsSkills } from "../../content/Skills";

const StyledSkillsContainer = styled.div`
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
`;

const Skills = () => {
  return (
    <StyledSkillsContainer>
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
