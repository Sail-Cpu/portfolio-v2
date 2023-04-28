import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
import Logo from "../assets/img/logo.png";

const StyledValue = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${theme.colors.primary};
  box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.25);
  .value-title {
    display: flex;
    align-items: center;
    img {
      width: 40px;
    }
    h1 {
      font-size: 23px;
      margin-left: 20px;
    }
  }
  .value-text {
    margin-top: 10px;
    color: rgba(255, 251, 235, 0.65);
  }
`;

const Value = (props) => {
  return (
    <StyledValue>
      <div className="value-title">
        <img src={Logo} alt="logo" />
        <h1>{props.title}</h1>
      </div>
      <div className="value-text">
        <p>{props.text}</p>
      </div>
    </StyledValue>
  );
};

export default Value;
