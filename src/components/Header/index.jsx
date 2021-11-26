import React from "react";
import styles from './styleHeader.css';
import Funko from '../../Assets/imagemHeader/images.png'
import styled from 'styled-components';

const imagemHeader = ({className, children}) => (
    <img className={className} src={Funko} alt="funko" id="img-funko">
      {children}
    </img>
  )
  const Imagem = styled(imagemHeader)`
  width: 100%;
  height: 10rem;
  `
  
  const Header = () => (
    <header className={styles.Header}>
      <Imagem />
    </header>
  );
  
  
  export default Header;