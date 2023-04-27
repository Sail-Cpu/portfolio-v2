import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
//Components
import SectionName from "../../components/SectionName";
import Picture from "../../assets/img/picture.png";

const StyledMe = styled.section`
  position: relative;
  margin-top: 180px;
  width: 100%;
  .me-content {
    display: flex;
    align-items: center;
    width: 100%;
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
  @media screen and (max-width: 500px){
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
    text-align: center;
  }
`;

const paragraph1 =
  "Bonjour, je m'appelle Sofiane, j'ai 20 ans et je vis dans les " +
  "environs de Lille. Actuellement, je suis en 2ème année de " +
  "B.U.T informatique à l'Université de Lille.";
const paragraph2 =
  "Je suis passionné par le développement web et j'apprends de " +
  "manière autodidacte depuis 3 ans. Très motivé, je sais écouter " +
  "les demandes et fournir le travail nécessaire. Curieux, j'aime " +
  "découvrir de nouvelles choses et je n'ai pas peur de travailler" +
  "avec des technologies récentes. Grâce à ma bonne capacité" +
  "d'adaptation, je peux facilement intégrer une nouvelle équipe.";

const Me = (props) => {
  return (
    <StyledMe ref={props.position}>
      <SectionName nb="01" name="Moi" />
      <StyledMeBar width="55" left />
      <StyledMeBar width="10" right />
      <div className="me-content">
        <StyledText>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </StyledText>
        <StyledPictureContainer>
          <div className="picture"></div>
          <div className="picture-fond"></div>
        </StyledPictureContainer>
      </div>
    </StyledMe>
  );
};

export default Me;
