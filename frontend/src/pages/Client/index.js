import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';
import api from '../../services/api';

export default function Client() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleClient(e) {
        e.preventDefault();

        const data = {
            name,
            address,
            email,
            neighborhood,
            number,
            city,
            uf,
            whatsapp,
        };
        try {
            const response = await api.post('/client', data);
            alert(`Cliente cadastrado com sucesso! ${response.data.id}`);

        } catch (err) {
            alert('Erro no cadastro de clientes');
        }
    }



    return (
        <div className="client-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Cadastro de Clientes</h1>
                    <p>Faça aqui o cadastro do seu cliente. Crie, pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/clientlist">
                        <FiLogIn size={16} color="#3466ee" />
                    Visualizar Clientes Cadastrados.
                    </Link>
                </section>

                <form onSubmit={handleClient} >

                    <input
                        placeholder="Nome do cliente"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <input
                        placeholder="Endereço"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Nº"
                            style={{ width: 90 }}
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />

                        <input
                            placeholder="Bairro"
                            value={neighborhood}
                            onChange={e => setNeighborhood(e.target.value)}
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}   