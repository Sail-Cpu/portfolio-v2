import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
//Icons
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
  return (
    <StyledSocialMedia>
        <a href="mailto:sofiane.lasoa1@hotmail.com">
            <MailIcon />
        </a>
      <a target="_blank" href="https://github.com/Sail-Cpu" rel="noreferrer">
        <GitHubIcon />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/sofiane-lasoa-506678234/"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <div className="form"></div>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
