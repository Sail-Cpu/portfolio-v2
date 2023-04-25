import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import { TechnoSkills } from "../../content/Skills";

const StyledSkillsContainer = styled.div`
  padding: 30px 0;
  margin-top: 150px;
  display: flex;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  .slide-skill {
    display: flex;
    white-space: nowrap;
    animation: defilement 15s linear infinite;
    @keyframes defilement {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;

const StyledSkill = styled.div`
  display: flex;
  margin-right: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
      {[...Array(3)].map((_, idx) => {
        return (
          <div key={idx} className="slide-skill">
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
    </StyledSkillsContainer>
  );
};

export default Skills;
