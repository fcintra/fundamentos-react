import PropTypes from "prop-types";
import React, { useContext } from "react";
import Button from "./Button";
import styles from './Header.css';
import { ThemeContext } from "./ThemeContext";

console.log(styles)

function Header(props){
  const {onToggleTheme} = useContext(ThemeContext);
  
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
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