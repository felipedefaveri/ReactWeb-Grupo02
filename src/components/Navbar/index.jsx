import React from 'react';
import styles from './navbar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavBar = () => (
  <nav id="navHeader" className="NavBar">
    <ul>
      <li className="navButtons">
        <Link to="/"><a>Inicio</a></Link>
      </li>
      <li className="navButtons">
        <Link to="/sobre"><a>Sobre</a></Link>
      </li>
      <li className="navButtons">
        <Link to="/contato"><a>Contato</a></Link>
      </li>
      <li className="navButtons">
        <Link to="/carrinho"><a>Carrinho</a></Link>
      </li>
    </ul>
    
  </nav>
);

export default NavBar;
