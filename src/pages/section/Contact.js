import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import ContactContent from "../../content/Contact";
//Components
import SectionName from "../../components/SectionName";
import Button from "../../components/Button";
//Icon
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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
  }
  @media screen and (max-width: 900px) {
    .text {
      width: 100%;
    }
  }
`;

const Contact = (props) => {
  const [content, setContent] = useState(ContactContent.fr);

  useEffect(() => {
    if (props.language.name === "fr") setContent(ContactContent.fr);
    if (props.language.name === "en") setContent(ContactContent.en);
  }, [props.language]);

  return (
    <StyledContact ref={props.position}>
      <SectionName nb="04" name={content.name} />
      <div className="bar"></div>
      <div className="text">
        <p>{content.text}</p>
      </div>
      <a href={content.mail}>
        <Button label={MailOutlineIcon} />
      </a>
    </StyledContact>
  );
};

export default Contact;
