import React from 'react';
import './styles.css';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoSardinha from '../../assets/sardinhas.svg';
import registerImg from '../../assets/register.svg';
import moneyImg from '../../assets/money.svg';
import logPeixaria from '../../assets/midle.png';
import printerImg from '../../assets/printer.svg';


export default function Admin() {
    return (
        <div className="admin-container">

            <header>
                <img src={logPeixaria} alt="Peixaria do Gordo"/>
                <span>SEJA BEM VINDO!</span>
                <Link className="button" to="../../assets/product"> Meu Perfil</Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />                     
                </button>                
            </header>


            <h1>Painel Administrativo</h1>
                <ul>
                    <li>
                        <img src={registerImg} alt="Cadastro de Clientes"/>
                        <strong>Cadastro de Clientes</strong>
                        <p>Aqui você pode pesquisar, alterar e cadastrar os seus CLIENTES a qualquer instante.</p>
                        <Link className="back-link-15px" to="/client">Ir para o cadastro de clientes</Link>
                    </li>

                    <li>
                        <img src={logoSardinha} alt="Cadastro de Produtos"/>
                        <strong>Cadastro de Produtos</strong>
                        <p>Aqui você pode pesquisar, alterar e cadastrar os seus PRODUTOS a qualquer instante.</p>
                        <Link className="back-link-15px" to="/product">Ir para o cadastro de produtos</Link>
                    </li>

                    <li>
                        <img src={moneyImg} alt="Vendas"/>
                        <strong>Vendas</strong>
                        <p>Aqui você pode pesquisar, alterar e cadastrar as suas VENDAS a qualquer instante.</p>
                        <Link className="back-link-15px" to="/category">Ir para as vendas</Link>
                    </li>

                    <li>
                        <img src={printerImg} alt="Relatórios e Impressões"/>
                        <strong>Relatórios e Impressões</strong>
                        <p>Visualize e imprima relatórios.</p>
                        <Link className="back-link-15px" to="/category">Ir para relatórios e impressões</Link>
                    </li>

                </ul>








            



           



            


          

        </div>
    );
}