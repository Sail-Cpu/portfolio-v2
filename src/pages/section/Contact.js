import React from 'react'
import styled from "styled-components";
import theme from "../../styles/Theme";
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
    margin: 15px 0;
    width: 2px;
    height: 35px;
    background-color: ${theme.colors.fourth};
  }
  .text{
    text-align: center;
    width: 45%;
    color: ${theme.colors.fourth};
    margin-bottom: 15px;
  }
`;


const Contact = (props) => {
    return (
      <StyledContact ref={props.position}>
        <SectionName nb="04" name="Me Contacter" />
        <div className="bar"></div>
        <div className="text">
          <p>
            En ce moment, je suis à la recherche d'expérience dans l'univers du
            développement web. Si mon profil vous intéresse, n'hésitez pas à me
            contacter.
          </p>
        </div>
        <a href="mailto:sofiane.lasoa1@hotmail.com">
          <Button label={MailOutlineIcon} />
        </a>
      </StyledContact>
    );
}

export default Contact;