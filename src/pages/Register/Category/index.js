import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CategoryRegister() {
    const initialsValues = {
        name: '',
        description: '',
        color: ''
    };
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialsValues);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    useEffect(() => {
        setTimeout(() => {
            const URL_TOP = 'http://localhost:8080/categorias';
            fetch(URL_TOP)
                .then(async (resposta) => {
                    const respostaJSON = await resposta.json();
                    setCategories([ ...respostaJSON ]);
                });
        }, 4 * 1000);
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name}</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);
                setValues(initialsValues);
            }}>
                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categories.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>{categories.map((item) => {
                return (
                    <li key={`${item.name}`}>
                        {item.name}
                    </li>
                );
            })}</ul>
            
            <Link to="/register/category">
                Cadastrar Nova Categoria
            </Link>
        </PageDefault>
    );
}

export default CategoryRegister;