import './App.css';
import Contato from './pages/Contato/contato.jsx';
import Footer from './pages/Footer/footer.jsx';
import Formacoes from './pages/Formacoes/formacoes.jsx';
import Home from './pages/Home/home.jsx';
import Nav from './pages/menunav/nav.jsx';
import Projetos from './pages/Projetos/projetos.jsx';
import Skills from './pages/Skills/skills.jsx';

function App() {
  return (
    <div className='container'>
      <Nav />
      <section id="home"><Home /></section>
      <section id="skills"><Skills /></section>
      <section id="formacoes"><Formacoes /></section>
      <section id="projetos"><Projetos /></section>
      <section id="contato"><Contato /></section>
      <Footer />
    </div>
  );
}

export default App;
