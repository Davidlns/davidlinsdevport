import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import { FiAlignJustify } from "react-icons/fi";

const Nav = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <nav>
       <div className='Logo'> &lt; David Lins DEV /&gt;</div>
        <div id='linksPages'>
          <a id='homel' href="#home">Home</a>
          <a id='skillsl' href="#skills">Skills</a>
          <a id='formacoesl' href="#formacoes">Formações</a>
          <a id='projetosl' href="#projetos">Projetos</a>
          <a id='contatol' href="#contato">Contato</a>
        </div>
        <a className='iconepages' href=""><FiAlignJustify /></a>
        <hr/>
      </nav>
    </>
  );
}

export default Nav;
