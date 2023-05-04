import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import MeContent from "../../content/Me";
import Values from "../../content/Values";
//Components
import SectionName from "../../components/SectionName";
import Picture from "../../assets/img/picture.png";
import Value from "../../components/Value";

const StyledMe = styled.section`
  position: relative;
  margin-top: 120px;
  width: 100%;
  .me-content {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .me-value {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 30px;
    margin-top: 100px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 600px) {
    .me-content {
      flex-direction: column;
    }
  }
`;
const StyledMeBar = styled.div`
  position: absolute;
  top: 45px;
  left: ${(props) => (props.left ? "0" : "")};
  right: ${(props) => (props.right ? "0" : "")};
  width: ${(props) => props.width + "%"};
  height: 2px;
  background-color: ${theme.colors.fourth};
  @media screen and (max-width: 800px) {
    display: ${(props) => (props.right ? "none" : "block")};
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    top: 35px;
  }
`;
const StyledPictureContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 60%;
  width: 25%;
  height: 320px;
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
  .picture-fond {
    position: absolute;
    top: 15px;
    right: -15px;
    width: 100%;
    height: 100%;
    background-color: rgba(38, 49, 89, 0.2);
  }
  @media screen and (max-width: 800px) {
    position: relative;
    width: 35%;
    left: 0;
    top: 0;
    .picture {
      position: relative;
    }
  }
  @media screen and (max-width: 600px) {
    width: 50%;
  }
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;
const StyledText = styled.div`
  margin-top: 25px;
  width: 55%;
  p {
    margin-bottom: 20px;
    font-size: 20px;
    color: ${theme.colors.fourth};
  }
  @media screen and (max-width: 800px) {
    width: 65%;
    p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Me = (props) => {
  const [content, setContent] = useState(MeContent.fr);
  const [values, setValues] = useState(Values.fr);

  useEffect(() => {
    if (props.language.name === "fr") {
      setContent(MeContent.fr);
      setValues(Values.fr);
    }
    if (props.language.name === "en") {
      setContent(MeContent.en);
      setValues(Values.en);
    }
  }, [props.language]);

  return (
    <StyledMe ref={props.position}>
      <SectionName nb="01" name={content.title} />
      <StyledMeBar width="55" left />
      <StyledMeBar width="10" right />
      <div className="me-content">
        <StyledText>
          {content.paragrah.map((par, idx) => {
            return <p key={idx}>{par}</p>;
          })}
        </StyledText>
        <StyledPictureContainer>
          <div className="picture"></div>
          <div className="picture-fond"></div>
        </StyledPictureContainer>
      </div>
      <div className="me-value">
        {values.map((value, idx) => {
          return <Value key={idx} title={value.title} text={value.text} />;
        })}
      </div>
    </StyledMe>
  );
};

export default Me;
