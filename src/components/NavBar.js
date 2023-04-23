import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 230px;
  width: 100%;
  height: 130px;
`;

const NavBarHeader = styled.div`
  width: 70%;
  height: 100%;
  background-color: #263159;
  box-shadow: 0 0 26px 18px rgba(0, 0, 0, 0.2);
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarHeader></NavBarHeader>
    </NavBarContainer>
  );
};

export default NavBar;
