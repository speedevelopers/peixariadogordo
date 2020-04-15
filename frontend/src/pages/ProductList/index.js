import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';

export default function ProductList() {
    return (
        <div className="productlist-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Produtos Cadastrados</h1>
                    <p>Visualize aqui os produtos cadastrados. Pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/product">
                        <FiArrowLeft size={16} color="#3466ee" />
                    Retornar ao cadastro de produtos.
                    </Link>
                </section>

                <form >

                <div className="fieldsearch">
                <input placeholder="Digite o nome do produto"/>
               

                </div>
              
                    <table>
                        <tr>
                            <th>Produto</th>
                            <th>Valor de Venda</th>

                        </tr>
                        <tr>
                            <td>Dourada</td>
                            <td>R$ 25,00</td>

                        </tr>
                        <tr>
                            <td>Matrinchã</td>
                            <td>R$ 20,00</td>

                        </tr>

                        <tr>
                            <td>Lambari</td>
                            <td>R$ 15,00</td>

                        </tr> <tr>
                            <td>Piramutaba</td>
                            <td>R$ 25,00</td>
                        </tr>
                        <tr>
                            <td>Caranha</td>
                            <td>R$ 25,00</td>

                        </tr>
                        <tr>
                            <td>Lula</td>
                            <td>R$ 25,00</td>

                        </tr>
                     
                        <tr>
                            <td>Filé de Tilápia</td>
                            <td>R$ 18,00</td>

                        </tr>
                    </table>
                   
                </form>
            </div>
        </div>
    );
}
