import './contato.css';

export default function Contato() {
    return (
        <>
            <div className='container'>
                <h2 className='titcontato'>Fale Comigo</h2>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/david-lins-amaral-1059b0211/" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" alt="linkedin" />
                    </a>
                    <a href="https://github.com/Davidlns" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" />
                    </a>
                    <a href="mailto:davidlinsdev@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.odcdn.com.br/wp-content/uploads/2018/10/20181018233712.jpg" alt="gmail" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511942991840&text=Ol%C3%A1%20David,%20Venho%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio,%20Tenho%20interesse%20em%20conhecer%20mais%20seu%20trabalho!" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=512&id=16713&format=png" alt="whatsapp" />
                    </a>
                </div>
            </div>
        </>
    );
}
