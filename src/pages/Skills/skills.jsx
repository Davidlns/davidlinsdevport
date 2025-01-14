import './skills.css';


function Skills() {
    return (

        <>

            <div className='Containerskills'>

                <div className='pageskills'>
                    <div className='textoskill'>
                        <h2 className='Titulo2'>Principais Skills</h2>
                        <h3 className='Titulo3'>
                            <p>Meus pontos mais fortes são: Javascript, Typescript com react js, nextjs e vue js</p>
                            <p>Outras Skills são: Angular e vite js. Também tenho bastante prática com Python.</p>
                            <p>Utilizo o banco de dados mongodb com frequencia, apesar de me virar bem com sql.</p>
                        </h3>
                    </div>

                    <div className='icons'>
                        <div className='iconslinhas'>
                            <img className='tecicon' alt="David Js" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                            <img className='tecicon' alt="David Py" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                            <img className='tecicon' alt="David TS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
                            <img className='tecicon' alt="David HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        </div>
                        <div className='iconslinhas'>
                            <img className='tecicon' alt="David CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                            <img className='tecicon' alt="David React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                            <img className='tecicon' alt="David Angular" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg" />
                            <img className='tecicon' alt="David Vuejs" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" />
                        </div>
                        <div className='iconslinhas'>
                            <img className='tecicon' alt="David Nextjs" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" />
                            <img className='tecicon' alt="David Mongodb" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" />
                            <img className='tecicon' alt="David Vite" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" />
                            <img className='tecicon' alt="David Git" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='linha2'/>
        </>

    )
}

export default Skills;