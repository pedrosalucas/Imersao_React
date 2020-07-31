import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_studylist2.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo Favoriteflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/register/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;