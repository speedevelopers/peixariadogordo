import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';
import api from '../../services/api';

export default function Category() {
    const [name, setName] = useState('');

    async function handleCategory(e) {
        e.preventDefault();

        const data = {
            name,
        };

        try {
            const response = await api.post('/category', data);
            alert(`ID da categoria cadastrada: ${response.data.id}`);
        } catch {
            alert('Erro no cadastro de categorias');
        }
    }
    return (
        <div className="category-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Cadastro de Categorias</h1>
                    <p>Faça aqui o cadastro das categorias. Crie, pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/client">
                        <FiLogIn size={16} color="#3466ee" />
                    Visualizar Categorias Cadastradas.
                    </Link>
                </section>

                <form onSubmit={handleCategory}>
                    <input
                        placeholder="Descrição da Categoria"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}