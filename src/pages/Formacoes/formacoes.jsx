import './formacoes.css';
import Full from '../../imagens/full.jpeg';
import Fullstack from '../../imagens/Fullstack.jpg';
import Ciencia from '../../imagens/ciencia.png';

function Formacoes() {
    return (
        <>
            <div className='container'>
                <h1 className='formtit'>Minhas Formações Academicas</h1>

                <div className='infoform'>
                    <div className="card" style={{ width: "22rem" }}>
                        <img src={Fullstack} className="card-img-top" alt="fullstack" />
                        <div className="card-body">
                            <h4>Desenvolvimento Full-Stack</h4>
                            <h5>Universidade Estácio de sá</h5>
                            <p className="card-text">Atualmente estou realizando esse curso superior com previsão de conclusão para 06/2026, esse é um curso voltado para o desenvolvimento 
                                geral de aplicações, indo desde o front até o back-end</p>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "22rem" }}>
                        <img src={Full} className="card-img-top" alt="full" />
                        <div className="card-body">
                            <h4>Técnico de Informática e programação (Médio técnico)</h4>
                            <h5>Colégio Pentágono Santo andré</h5>
                            <p className="card-text">Curso técnico focado em várias áreas da informática, como redes, desenvolvimento de software, e hardware. No quesito programação, aprendi linguagens como:
                                JS, CSS, HTML, PHP, C#, e o banco Mysql. O curso foi finalizado em 2020.</p>
                        </div>
                        
                    </div>

                    <div className="card" style={{ width: "22rem" }}>
                        <img src={Ciencia} className="card-img-top" alt="ciencia" />
                        <div className="card-body">
                            <h4>Ciência da Computação</h4>
                            <h5>FAM - Faculdade das Américas (Trancado)</h5>
                            <p className="card-text">Realizei 1 ano e meio de curso, e devido a uma mudança emergêncial de estado tive que trancar o curso, porém, pretendo retomar assim que possível, para finalizar</p>
                        </div>
                        
                    </div>
                </div>
                <hr className='linhaform'/>
            </div>
        </>
    )
}

export default Formacoes;