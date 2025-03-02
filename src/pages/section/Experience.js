import React, { useContext } from "react";

import styled from "styled-components";
import theme from "../../styles/Theme";

import { firebaseContext } from "../../contexts/firebaseContext";
import useContent from "../../hook/useContent";
import SectionName from "../../components/SectionName";

const path = "/uploads/img";

const StyledXP = styled.section`
  margin: 150px 0;
  width: 100%;
  .container {
    width: 100%;
    background-color: ${theme.colors.primary};
    box-shadow: 0px 0px 18px 5px rgba(0,0,0,0.15);
    border-radius: 10px;
    padding: 20px;
    margin-top: 15;
  }
  .logo {
    positon: absolute; 
    width: 40px;
    height: 40px; 
    right: 10px;
    top: 10px;
  }
`;

const Experience = (props) => {

  const {userData} = useContext(firebaseContext);
  const content = useContent(userData, "Experience");

  return (
    <StyledXP ref={props.position}>
        <div style={{display: "flex", alignItems: "center", gap: 10}}>
            <SectionName name="Experiences" nb="04" />
            <div style={{width: "100%", height: "2px", backgroundColor: "rgba(255,251,235,0.65)"}}></div>
        </div>
      {
        content && 
            <div style={{position: "relative", display: "flex", flexDirection: "column"}} className="container">
                <div className="logo" style={{backgroundImage: `${path}/cnrs.png`, backgroundColor: "grey"}} />
                <span style={{fontSize: "20px"}}>{content.name}</span>
                <span style={{fontSize: "15px"}}>{content.date}</span>
                <div style={{marginTop: "10px",width: "300px", height: "160px", backgroundImage: `${path}/cnrs.jpg`, backgroundColor: "grey"}} />
                <span style={{marginTop: "10px", fontFamily: "Arial", fontSize: "20px"}}>Stagiaire développeur web</span>
                <p style={{fontFamily: "Arial", marginTop: "10px"}}>{content.desc}</p>
            </div>
      }
    </StyledXP>
  );
};

export default Experience;
