import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';
import api from '../../services/api';


export default function Product() {
    const [description, setDescription] = useState('');
    const [buyPrice, setBuyPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [categories, setCategories] = useState([]);
    const [category_id, setCategory_id] = useState(0);
    const [unit, setUnit] = useState('');

    useEffect(() => {
        api.get('category').then(response => {
            setCategories(response.data);
        })
    }, [])

    async function handleProduct(e) {
        e.preventDefault();

        const data = {
            description,
            buyPrice,
            salePrice,
            unit,
            category_id,
        };

        try {
            const response = await api.post('product', data);
            alert(`ID do produto cadastrado: ${response.data.id}`);

        } catch (error) {
            alert('Erro no cadastro de Produtos');
        }
    }

    return (
        <div className="product-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Cadastro de Produtos</h1>
                    <p>Faça aqui o cadastro dos produtos. Crie, pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/productlist">
                        <FiLogIn size={16} color="#3466ee" />
                    Visualizar Produtos Cadastrados.
                    </Link>
                </section>

                <form onSubmit={handleProduct}>

                    <input
                        placeholder="Descrição do Produto"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor de Compra"
                        value={buyPrice}
                        onChange={e => setBuyPrice(e.target.value)}
                    />

                    <input
                        placeholder="Valor de Venda"
                        value={salePrice}
                        onChange={e => setSalePrice(e.target.value)}
                    />



                    <select
                        style={{ width: 110 }}
                        value={unit}
                        onChange={e => setUnit(e.target.value)}>
                        <option>Kg</option>
                        <option>Pkg</option>
                        <option>Pça</option>
                    </select>


                    <select onChange={e => setCategory_id(e.target.value)}>
                        {categories.map(category => (
                            <option value={category.id}
                                key={category.id}>
                                {category.name}
                            </option>
                        ))}


                    </select>


                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}



//<input placeholder="Unidade"
//style={{ width: 180 }}
//value={unit}
//onChange={e => setUnit(e.target.value)}
///>