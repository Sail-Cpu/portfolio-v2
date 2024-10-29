import React, { useContext, useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../styles/Theme";
import { firebaseContext } from "../contexts/firebaseContext";
import { themeContext } from "../contexts/themeContext";

const StyledLanguage = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  img {
    box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.25);
    width: 20px;
    height: 15px;
    cursor: pointer;
  }
  .active-language {
    display: flex;
    align-items: center;
    .active-flag {
      margin-right: 10px;
    }
    svg {
      color: ${theme.colors.third};
      cursor: pointer;
    }
  }
  .other-language {
    position: relative;
    top: 10px;
    display: flex;
    .bars {
      position: relative;
      left: 15px;
      border-left: 2px solid ${theme.colors.third};
      border-bottom: 2px solid ${theme.colors.third};
      width: 20px;
      height: 20px;
    }
    img {
      position: relative;
      left: 30px;
      top: 10px;
    }
    margin-bottom: 10px;
  }
`;

const path = "/uploads/flags"

const Language = (props) => {
  const [toggle, setToggle] = useState(false);

  const {language, setLanguage} = useContext(themeContext);

  function handleClick(lang) {
    setLanguage(lang);
    setToggle(false);
  }

  const {userData} = useContext(firebaseContext);

  return (
    <StyledLanguage>
      <div className="active-language">
        <img alt="lang" className="active-flag" src={`${path}/${language.flag}`} />
        <ExpandMoreIcon onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <>
          {userData?.language.map((lang, idx) => {
            return (
              <React.Fragment key={idx}>
                {lang.name !== language.name && (
                  <div
                    onClick={() => handleClick(lang)}
                    className="other-language"
                  >
                    <div className="bars"></div>
                    <img alt="lang" className="active-flag" src={`${path}/${lang.flag}`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </>
      )}
    </StyledLanguage>
  );
};

export default Language;
