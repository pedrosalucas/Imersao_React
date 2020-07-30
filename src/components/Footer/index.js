import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo_meteflix.png';
import LogoImer from '../../assets/img/logo_imer.svg';
import LogoLin from '../../assets/img/linkedin.png';
import LogoGit from '../../assets/img/github.png';
import { Link } from 'react-router-dom';
import { Wrapper } from '../Carousel/styles';
import './Footer.css';

function Footer() {
  return (
    <FooterBase>
      <div id="footerbar">
        <Link to="/">
          <img className="LogoFooter" src={Logo} alt="Logo Favoriteflix" />
        </Link>
        <div>
          <a href="https://github.com/pedrosalucas" target="blank">
            <img className="SocialLogo" src={LogoGit} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-pedrosa-vieira-lima-3940b31a4/" target="blank">
            <img className="SocialLogo" src={LogoLin} alt="Linkedin" />
          </a>
        </div>
      </div>
      <Wrapper>
        <p className="Thank">Desenvolvido durante a </p>
        {' '}
        <a href="https://www.alura.com.br/" target="blank">
          <img className="LogoFooter" src={LogoImer} alt="Logo Imersão React" />
        </a>
      </Wrapper>
    </FooterBase>
  );
}

export default Footer;
