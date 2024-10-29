import React, { useContext } from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
//Components
import SectionName from "../../components/SectionName";
import Value from "../../components/Value";
import useContent from "../../hook/useContent";
import { firebaseContext } from "../../contexts/firebaseContext";

const StyledMe = styled.section`
  position: relative;
  margin-top: 120px;
  width: 100%;
  .me-content {
    display: flex;
    align-items: center;
    width: 100%;
    font-family: sans-serif;
  }
  .me-value {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 30px;
    margin-top: 170px;
    font-family: sans-serif;
    font-size: 16px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    .me-value{
      margin-top: 100px;
    }
  }
  @media screen and (max-width: 600px) {
    .me-content {
      flex-direction: column;
    }
    .me-value{
      margin-top: 70px;
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
  width: 30%;
  height: 400px;
  border: 3px solid ${theme.colors.secondary};
  .picture {
    position: absolute;
    top: 15px;
    right: -15px;
    width: 100%;
    height: 100%;
    background-image: url("/uploads/img/picture.png");
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

const path = "/uploads/icons"

const Me = (props) => {

  const {userData} = useContext(firebaseContext);

  const content = useContent(userData, "me")
  const values = useContent(userData, "values")

  return (
    <StyledMe ref={props.position}>
      {
        content && values &&
          <>
            <SectionName nb="01" name={content.title} />
            <StyledMeBar width="56" left />
            <StyledMeBar width="6" right />
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
                return <Value key={idx} logo={`${path}/${value.icon}`} title={value.title} text={value.text} />;
              })}
            </div>   
          </>
      }
    </StyledMe>
  );
};

export default Me;
