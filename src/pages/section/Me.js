import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
//Components
import SectionName from "../../components/SectionName";
import Picture from "../../assets/img/picture.png";

const StyledMe = styled.section`
  position: relative;
  margin-top: 150px;
  width: 100%;
  height: 100vh;
  min-height: 650px;
  max-height: 820px;
`;

const StyledMeBar = styled.div`
  position: absolute;
  top: 45px;
  left: ${(props) => (props.left ? "0" : "")};
  right: ${(props) => (props.right ? "0" : "")};
  width: ${(props) => props.width + "%"};
  height: 2px;
  background-color: ${theme.colors.fourth};
`;

const StyledPictureContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 60%;
  width: 25%;
  height: 260px;
  border: 3px solid ${theme.colors.secondary};
  .picture {
    position: absolute;
    top: 15px;
    right: -15px;
    width: 100%;
    height: 100%;
    background-image: url("${Picture}");
    background-size: cover;
    background-position: center;
  }
  div {
    position: absolute;
    top: 15px;
    right: -15px;
    width: 100%;
    height: 100%;
    background-color: rgba(38, 49, 89, 0.2);
  }
`;

const Me = () => {
  return (
    <StyledMe>
      <SectionName nb="01" name="Moi" />
      <StyledMeBar width="55" left />
      <StyledPictureContainer>
        <div className="picture"></div>
        <div></div>
      </StyledPictureContainer>
      <StyledMeBar width="10" right />
    </StyledMe>
  );
};

export default Me;
