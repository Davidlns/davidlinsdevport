import './home.css';
import Davidimg from '../../imagens/Cel.png';
import Relogio from './relogio';

const Home = () => {
    return (
        <>
            <div className='container'>

                <div className='TextoHome'>
                    <div className='textoshome'>
                        <h1 className='Titulo1'>Bem-vindo ao meu Portifólio!</h1>
                        <h2 className='Titulo2'>Meu nome é David, sou DEV FullStack!</h2>
                        <h3 className='Titulo3'>
                            <p>Sou muito guiado pela minha paixão pela tecnologia e vontade de evoluir,</p>
                            <p>sempre buscando extrair 110% da minha dedicação para seja</p>
                            <p>lá qual for o propósito. Estou em busca de novas </p>
                            oportunidades que me permitam explorar meu potencial e 
                            fazer a diferença.
                        </h3>
                    </div>
                    <div className='celular'>
                        <img src={Davidimg} />
                        <div className='divrelogio'>
                            <Relogio />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='linhas'/>
        </>
    );
}

export default Home;
