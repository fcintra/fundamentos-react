import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled from 'styled-components';
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button";

const Title = styled.h1`
  color: #637BF3;
`;


function Header(props){
  const {onToggleTheme} = useContext(ThemeContext);
  
  return (
    <div>
      <Title>{props.title}</Title>
      <Button 
        onClick={onToggleTheme}
      >
        Mudar Tela
      </Button>
      {props.children}
      
    </div>
  );
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  title: `Math blog`,
}


export default Header;