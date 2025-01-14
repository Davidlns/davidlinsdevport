import { useState, useEffect } from 'react';
import './relogio.css';

const Relogio = () => {
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const obterDataPorExtenso = (data) => {
        const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return data.toLocaleDateString('pt-BR', opcoes);
    };

    return (
        <div className='datahora'>
            <h3 id='datah3'>{obterDataPorExtenso(horaAtual)}</h3>
            <h2 id='relogioh2'>{horaAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>
        </div>
    );
}

export default Relogio;
