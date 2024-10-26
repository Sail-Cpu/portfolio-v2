import React, { useContext } from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
import allIcons from "../lib/allIcons";
import EmailIcon from '@mui/icons-material/Email';
import { firebaseContext } from "../contexts/firebaseContext";

const StyledSocialMedia = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 50px;
  .form {
    position: relative;
    bottom: 0;
    background-color: ${theme.colors.fourth};
    width: 3px;
    height: 140px;
  }
  svg {
    margin-bottom: 20px;
    cursor: pointer;
  }
  a {
    transition: 0.4s ease;
    color: ${theme.colors.secondary};
  }
  a:hover {
    color: ${theme.colors.third};
  }

  @media screen and (max-width: 1050px) {
    left: 35px;
  }
  @media screen and (max-width: 800px) {
    left: 15px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const SocialMedia = () => {

  const {userData} = useContext(firebaseContext);

  function selectIcon(appName){
    let icon;
    for(let i = 0; i <  allIcons.length; i++){
      if(allIcons[i].name.toLowerCase()  == appName.toLowerCase() ){
        icon = allIcons[i].icon;
      }
    }
    return icon;
  }
  
  return (
    <StyledSocialMedia>
      <a href={`mailto:${userData.contact.mail}`}>
        <EmailIcon />
      </a>
      {
        userData.contact.app.map((app, idx) => {
          return(
            <a key={idx} target="_blank" href={app.link} rel="noreferrer">
              {selectIcon(app.name)}
            </a>
          )
        })
      }
      <div className="form"></div>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
