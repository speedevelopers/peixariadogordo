import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoSardinha from '../../assets/sardinhas.svg';
import categoryImg from '../../assets/category.svg';
import registerImg from '../../assets/register.svg';
import moneyImg from '../../assets/money.svg';


export default function Admin() {
    return (
        <div className="admin-container">
 
            <div className="content">
                <section className="form">
                    <div className="cabecalho">
                        <img src={registerImg} alt="Registro" />
                        <h1>Cadastro de Clientes</h1>
                    </div>
                    <p>Aqui você pode pesquisar, alterar e cadastrar os seus CLIENTES a qualquer instante.</p>
                    <Link className="back-link-15px" to="/client">Ir para o cadastro de clientes</Link>
                </section>
            </div>



            <div className="content">
                <section className="form">
                    <div className="cabecalho">
                        <img src={logoSardinha} alt="Sardinhas" />
                        <h1>Cadastro de Produtos</h1>
                    </div>
                    <p>Aqui você pode pesquisar, alterar e cadastrar os seus PRODUTOS a qualquer instante.</p>
                    <Link className="back-link-15px" to="/product">Cadastro de Produtos</Link>
                </section>
            </div>



            <div className="content">
                <section className="form">
                    <div className="cabecalho">
                        <img src={categoryImg} alt="Dinheiro" />
                        <h1>Cadastro de Categorias</h1>
                    </div>
                    <p>Aqui você pode pesquisar, alterar e cadastrar os suas CATEGORIAS a qualquer instante.</p>
                    <Link className="back-link-15px" to="/category">Cadastro de Categorias</Link>                    
                </section>
            </div>


            <div className="content">
                <section className="form">
                    <div className="cabecalho">
                        <img src={moneyImg} alt="Dinheiro" />
                        <h1>Vendas</h1>
                    </div>
                    <p>Aqui você pode pesquisar, alterar e cadastrar as suas VENDAS a qualquer instante.</p>
                    <Link className="back-link-15px" to="/category">Cadastro de Categorias</Link>                    
                </section>
            </div>


        </div>
    );
}