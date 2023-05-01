import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

const StyledSectionName = styled.div`
  font-size: 35px;
  .sectionNameNb {
    color: ${theme.colors.third};
    margin-right: 15px;
  }
  @media screen and (max-width: 600px){
    font-size: 25px;
  }
`;

const SectionName = (props) => {
  const nbRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (props.setNbWidth) {
      props.setNbWidth(nbRef.current.offsetWidth);
      props.setNameWidth(nameRef.current.offsetWidth);
    }
  }, [props]);

  return (
    <StyledSectionName>
      <span ref={nbRef} className="sectionNameNb">
        {props.nb}.
      </span>
      <span ref={nameRef}>{props.name.toUpperCase()}</span>
    </StyledSectionName>
  );
};

export default SectionName;
