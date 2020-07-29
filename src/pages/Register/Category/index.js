import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>{categories.map((item, index) => {
                return (
                    <li key={`${item}${index}`}>
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