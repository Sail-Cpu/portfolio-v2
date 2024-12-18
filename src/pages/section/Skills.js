import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import SectionName from "../../components/SectionName";
import { firebaseContext } from "../../contexts/firebaseContext";
import { themeContext } from "../../contexts/themeContext";

const StyledSkillsContainer = styled.section`
  margin-top: 150px;
  margin-bottom: 390px;
  width: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  .skills-container{
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
  }
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
  font-size: 2vw;
  span {
    margin-right: 25px;
  }
  img {
    height: 2vw;
  }
  @media screen and (min-width: 1300px){
    font-size: 30px;
    img{
      height: 40px;
    }
  }
  @media screen and (max-width: 600px){
    font-size: 12px;
    img{
      height: 20px;
    }
  }
`;

const path = "/uploads/icons"

const Skills = (props) => {
  const [nbWidth, setNbWidth] = useState(0);
  const [nameWidth, setNameWidth] = useState(0);
  const [name, setName] = useState(null);

  const {userData} = useContext(firebaseContext);
  const {language} = useContext(themeContext)

  useEffect(() => {
    if(userData){
      setName(userData.nav[language.name].link2);
    }
  }, [userData])

  return (
    <StyledSkillsContainer
      ref={props.position}
      nbWidth={nbWidth}
      nameWidth={nameWidth}
    >
      {
        userData && name &&
          <>
            <div className="skills-container">
              <div className="skills-top">
                <SectionName
                  nb="02"
                  name={name}
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
                      {userData.top_skills.map((skill, idx) => {
                        return (
                          <StyledSkill key={idx}>
                            <span>{skill.name.toUpperCase()}</span>
                            <img src={`${path}/${skill.icon}`} alt={skill.name + " icon"} />
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
                      {userData.bottom_skills.map((skill, idx) => {
                        return (
                          <StyledSkill key={idx}>
                            <span>{skill.name.toUpperCase()}</span>
                            <img src={`${path}/${skill.icon}`} alt={skill.name + " icon"} />
                          </StyledSkill>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
      }
    </StyledSkillsContainer>
  );
};

export default Skills;
