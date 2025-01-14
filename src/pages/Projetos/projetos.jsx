import './projetos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import proj1 from '../../imagens/NOTB.png';
import proj2 from '../../imagens/NOTBFINANÇAS.png';
import proj3 from '../../imagens/CEP.png';
import proj4 from '../../imagens/Tarefalist.png';
import proj5 from '../../imagens/livraria.png';
import proj6 from '../../imagens/port.png';

function Projetos() {
    return (
        <div className='container'>
            <div className='container-inline'>
                <h1 className='titProjetos'>Projetos</h1>
                <div className='gallery'>
                    <div className="card">
                        <div className="card-head">
                            <h3>Cadastro Usuários (MongoDB, REACT.JS)</h3>
                        </div>
                        <a href="https://github.com/Davidlns/CadastroUSERS-React-API-Banco" target="_blank"><img src={proj1} className="card-img-top"/></a>
                        <div className="card-body">
                            <p className="card-text">
                                Esse é um projeto completo com criação de front-end e back-end e a junção de ambos, permitindo a comunicação com o banco através de interações do usuário,
                                com comandos como inclusão, e exclusão de dados. Usei o banco Mongodb, a biblioteca Prisma/Axios, e o framework Express.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h3>Controle Financeiro (REACT JS)</h3>
                        </div>
                        <a href="https://github.com/Davidlns/App_Financas_React" target="_blank"><img src={proj2} className="card-img-top"/></a>
                        <div className="card-body">
                            <p className="card-text">Um app React para controle financeiro, nesse app o usuário pode fazer inclusão de entradas e saídas de receitas e despesas, 
                            o usuário tambem tem opção de excluir essas transações caso necessário, o app faz todo o calculo e entrega ao usuário quanto ainda lhe resta de receita.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h3>Buscador de CEP (React, API)</h3>
                        </div>
                        <a href="https://github.com/Davidlns/APP-BUSCADOR-DE-CEP--REACT-API-" target="_blank"><img src={proj3} className="card-img-top"/></a>
                        <div className="card-body">
                            <p className="card-text">Esse app oferece ao usuário a função de receber informações de cep, que serão entregues através de uma requisição de API, baseada no cep que o usuário digita., 
                            além disso também adicionei um tratamento de exeções caso aconteça algum erro na entrada de dados do input.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h3>Lista de Tarefas (VUE JS)</h3>
                        </div>
                        <a href="https://github.com/Davidlns/Lista_Tarefas-VueJS-" target="_blank"><img src={proj4} className="card-img-top"/></a>
                        <div className="card-body">
                            <p className="card-text">Aplicação para controle de tarefas, com utilização de Vue JS para maior interação com o usuário, permite que o usuário controle suas tarefas do dia. 
                            Você pode definir tarefas comuns ou importantes, colocando o horário de cada tarefa a aplicação te avisará tocando uma música, clique no card e conclua a tarefa! </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h3>Livraria (React, Angular, Next)</h3>
                        </div>
                        <a href="https://github.com/Davidlns/Livraria-Mongodb-React-Next-Angular" target="_blank"><img src={proj5} className="card-img-top"/></a>
                        <div className="card-body">
                            <p className="card-text">Site Livraria Completo com front e back-end + Banco, usando varias bibliotecas e frameworks JAVASCRIPT. Permite a inclusão e exclusão de livros.
                            Usei MongoDB para fazer esse controle de cadastro dos produtos, com POST, GET, DELET.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h3>Meu Portifólio (React, Vite)</h3>
                        </div>
                        <a href="https://github.com/Davidlns/Meu-Portifolio-Em-desenvolvimento-" target="_blank"><img src={proj6} className="card-img-top"/></a>
                        <div className="card-body">
                            <p className="card-text">Esse é o portifólio que você está navegando, clicando aqui você terá acesso ao meu código, podendo ver toda a estrutura do projeto.
                            Desenvolvi esse portifólio usando React.js e Vite.js
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='linhaproj'/>
        </div>
    );
}

export default Projetos;
