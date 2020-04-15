import React from 'react';
import peixeImg from '../../assets/sardinhas.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

export default function Certo() {
    return (

        <div className="certo-container">
            <header>
                <img src={peixeImg} alt="Sardinhas" />
                <span>Seja Bem vindo!</span>
                <Link className="button" to="../../assets/product">Cadastrar Novo Produto</Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>


            

            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 890,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 890,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 890,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 890,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    );
}