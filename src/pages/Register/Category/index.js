import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CategoryRegister() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            
            <Link to="/register/category">
                Cadastrar Nova Categoria
            </Link>
        </PageDefault>
    );
}

export default CategoryRegister;