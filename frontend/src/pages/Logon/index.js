import React from 'react';
import './styles.css';
import logoImgMidle from '../../assets/midle.png';



export default function Logon () {
    return (
        <div className="logon-container">
           <div className="content">
            <section className="form">
            <img src={logoImgMidle} alt="House Fish" />

                <form >
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Seu login" />
                    <input placeholder="Sua senha"/>
                    <button className="button" type="submit">Entrar</button>

                
                </form>
            </section> 

            </div>  
        </div>
    ); 
}