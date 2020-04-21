import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';
import TableClients from '../../table';



export default function ClientList() {
    return (
        <div className="clientlist-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Clientes Cadastrados</h1>
                    <p>Visualize aqui os clientes cadastrados. Pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/client">
                        <FiArrowLeft size={16} color="#3466ee" />
                    Retornar ao cadastro de clientes.
                    </Link>

                </section>

                <form >

                    <TableClients />

                </form>

            </div>
        </div>
    );
}
