import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const StyledSocialMedia = styled.div`
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
    width: 5px;
    height: 140px;
  }
  svg {
    margin-bottom: 20px;
    cursor: pointer;
  }
  color: ${theme.colors.secondary};
`;

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
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
