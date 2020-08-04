import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/804591156491419649/BnUUh5KE_400x400.jpg" alt="Zack Asmongold"/>
                <div>
                    <strong>Zack Asmongold</strong>
                    <span>Economia</span>
                </div>
            </header>
            <p>
                Ama passar o tempo livre, que é quase o tempo todo, jogando World of Warcraft.
                <br/><br/>
                Especialista em poupar dinheiro, apesar de ser quase um milionário usa as mesmas roupas desde 2004.
            </p>

            <footer>
                <p>
                    preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;