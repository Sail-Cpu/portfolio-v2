import React, { useContext } from "react";

import styled from "styled-components";
import theme from "../../styles/Theme";
//Components
import SectionName from "../../components/SectionName";
import Button from "../../components/Button";
//Icon
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { firebaseContext } from "../../contexts/firebaseContext";
import useContent from "../../hook/useContent";
import allIcons from "../../lib/allIcons";

const StyledContact = styled.section`
  margin: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .bar {
    margin: 10px 0;
    width: 2px;
    height: 30px;
    background-color: ${theme.colors.fourth};
  }
  .text {
    text-align: center;
    width: 45%;
    color: ${theme.colors.fourth};
    margin-bottom: 15px;
    font-family: sans-serif;
  }
  .social {
    display: flex;
    justify-content: center;
    width: 50%;
    margin-top: 25px;
    a{
      margin: 0 10px;
    }
  }
  @media screen and (max-width: 900px) {
    .text {
      width: 100%;
    }
  }
`;

const Contact = (props) => {

  const {userData} = useContext(firebaseContext);
  const content = useContent(userData, "contact");

  function selectIcon(appName){
    let icon;
    for(let i = 0; i <  allIcons.length; i++){
      if(allIcons[i].name.toLowerCase() === appName.toLowerCase()){
        icon = allIcons[i].icon;
      }
    }
    return icon;
  }

  return (
    <StyledContact ref={props.position}>
      {
        content &&
          <>
            <SectionName nb="04" name={content.name} />
            <div className="bar"></div>
            <div className="text">
              <p>{content.text}</p>
            </div>
            <a href={`mailto:${userData.contact.mail}`}>
              <Button label={MailOutlineIcon} />
            </a>
            <div className="social">
              {
                userData.contact.app.map((app, idx) => {
                  return(
                    <a 
                    key={idx}
                    target="_blank" 
                    href={app.link}
                    rel="noreferrer">
                    {selectIcon(app.name)}
                  </a>
                  )
                })
              }
            </div>
          </>
      }
    </StyledContact>
  );
};

export default Contact;
