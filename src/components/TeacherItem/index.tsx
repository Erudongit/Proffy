import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';


export interface teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createnewconnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>

            <footer>
                <p>
                    preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a target="blank" 
                    onClick={createnewconnection} 
                    href={`https://wa.me/${teacher.whatsapp}`}>
                        <img src={wppIcon} alt="Whatsapp"/>
                        Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;