import React from 'react'
import styled from "styled-components";
import theme from "../../styles/Theme";
import ContactContent from "../../content/Contact";
//Components
import SectionName from "../../components/SectionName";
import Button from "../../components/Button";
//Icon
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const StyledContact = styled.section`
  margin: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .bar{
    margin: 10px 0;
    width: 2px;
    height: 30px;
    background-color: ${theme.colors.fourth};
  }
  .text{
    text-align: center;
    width: 45%;
    color: ${theme.colors.fourth};
    margin-bottom: 15px;
  }
  @media screen and (max-width: 900px){
    .text{
      width: 100%;
    }
  }
`;


const Contact = (props) => {
    return (
      <StyledContact ref={props.position}>
        <SectionName nb="04" name={ContactContent.name} />
        <div className="bar"></div>
        <div className="text">
          <p>
              {ContactContent.text}
          </p>
        </div>
        <a href={ContactContent.mail}>
          <Button label={MailOutlineIcon} />
        </a>
      </StyledContact>
    );
}

export default Contact;