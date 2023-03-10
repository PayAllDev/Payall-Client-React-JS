// * Dependencies Required 

import { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import { MdClose } from "react-icons/md"


// * Modules Required

import { AppContext } from "../../app/Context";
import { getArticlesData, getMarketData } from "../../services";
import { formatToCurrency, formatToPercentage } from "../../lib/display";

// * view Styles

import '../styles/home_view/index.css'
import '../styles/home_view/projectSection.css'
import '../styles/home_view/articlesSection.css'
import '../styles/home_view/simulatorSection.css'
import '../styles/home_view/markteSection.css'

// * Components Required

import welcome_screen_vector from '../../../src/assets/images/welcome_screen_vector.webp'
import tradingAnimation from '../../../src/assets/animation/trading_animation.json'

// * view to Return

const Home_view = () => {

    const { context, setContext } = useContext(AppContext)

    if (context.app.current_view == 'Home') return (

        <HomeView_Desktop />

    )

}

const HomeView_Desktop = () => {

    return (

        <div className="Home-View-Desktop-Container">

            <MobileLateralMenu />
            <TopSection />
            <ProjectSection />
            <ArticlesList />
            <SimulatorSection />
            <MarketSection />

        </div>

    )

}

const MobileLateralMenu = () => {

    const clickHandler = () => {

        document.getElementById('Lateral-Menu-Container').style.transform = 'translateX(100%)'

        setTimeout(() => { document.getElementById('Lateral-Menu-Container').style.display = 'none' },300)

    }

    return (

        <div className="Lateral-Menu-Container" id="Lateral-Menu-Container">

            <div className="Lateral-Menu-Background"></div>

            <div className="Lateral-Menu-Content">

                <div className="Lateral-Menu-Top-Container">

                    <p className="Lateral-Menu-Title-Label">Menu</p>

                    <div className="Top-Nav-Bar-Mobile-Action-Button-Container-Lateral" onClick={clickHandler}>

                        <div className="Top-Nav-Bar-Mobile-Action-Button">

                            <MdClose size={20} color="#ffffff" />

                        </div>

                    </div>


                </div>

                <a href="#top"><div className="Lateral-Menu-Option-Container" onClick={clickHandler}>

                    <p className="Lateral-Menu-Option-Label">Inicio</p>

                </div></a>

                <a href="#project"><div className="Lateral-Menu-Option-Container" onClick={clickHandler}>

                    <p className="Lateral-Menu-Option-Label">Proyecto</p>

                </div></a>

                <a href="#learn"><div className="Lateral-Menu-Option-Container" onClick={clickHandler}>

                    <p className="Lateral-Menu-Option-Label">Aprende con Articulos</p>

                </div></a>

                <a href="#simulator"><div className="Lateral-Menu-Option-Container" onClick={clickHandler}>

                    <p className="Lateral-Menu-Option-Label">Simulador</p>

                </div></a>

                <a href="#market"><div className="Lateral-Menu-Option-Container" onClick={clickHandler}>

                    <p className="Lateral-Menu-Option-Label">Mercado</p>

                </div></a>

                <div className="Lateral-Menu-Session-Buttons-Container">

                    <div className="Lateral-Menu-Session-Button">

                        <p className="Lateral-Menu-Session-Button-Label">Iniciar Sesion</p>

                    </div>

                    <div className="Lateral-Menu-Session-Button Lateral-Menu-Session-Button-Secundary">

                        <p className="Lateral-Menu-Session-Button-Label">Registrarme</p>

                    </div>

                </div>

            </div>

        </div>

    )

}

const TopSection = () => {

    return (

        <section className="Home-View-Container" id="top">

            <div className="Home-View-Background">

                <div className="Home-Background-Shape-0"></div>
                <div className="Home-Background-Shape-1"></div>

            </div>

            <div className="Home-View-Content">

                <div className="Home-View-Margin">

                    <div className="Home-View-Text-Left-Side">

                        <h1 className="Home-View-Title-Label">Aprende sobre inversiones y crea un plan de retiro</h1>
                        <p className="Home-View-subtitle-Label">??Te has dado cuenta de que el gobierno actual no resuelve un problema futuro muy importante?</p>
                        <p className="Home-View-subtitle-Label">Ese problema es la falta de una estrategia de inversi??n para la poblaci??n de M??xico. Aqu?? te ofrecemos la oportunidad de aprender t??cnicas efectivas para manejar tus finanzas personales y crear estrategias de inversi??n seguras que te permitan alcanzar tus objetivos financieros.</p>

                    </div>

                    <div className="Home-View-Vector-Right-Side">

                        <img src={welcome_screen_vector} alt="Hombre Blanco sosteniendo un celular con monedas flotando a su alrededor" className="Home-View-Vector" />

                    </div>

                </div>

            </div>

        </section>

    )

}

const ProjectSection = () => {

    return (

        <section className="Home-View-Project-Section" id="project">

            <div className="Home-View-Project-Background">

                <div className="Home-Project-Background-Shape-0"></div>

            </div>

            <div className="Home-View-Project-Content">

                <div className="Home-View-Project-Margin">

                    <div className="Home-View-Project-Text-Container">

                        <h2 className="Home-View-Project-Title-Label"><span className="Home-View-Project-Title-Decoration-Label">Conoce </span>mas sobre este proyecto.</h2>

                        <p className="Home-View-Project-Text-Label">Hola soy <a>Armando Octavio Peralta Ramirez</a> y desde hace varios meses he estado trabajando en desarrollar un Exchange de activos financieros, pero por falta de inter??s e inversi??n no logre lanzar el proyecto. En los ??ltimos a??os he participado en una competencia creada por el agrupo Actinver llamada Reto Actinver en la cual por el pago de $ 1000.00 MXN las personas se unen al reto el cual te permite aprender y usar un simulador de mercado, el mejor tras 3 meses de inversiones se gana $ 500,000 MXN, esta iniciativa me gusta mucho sin embargo no me gusta el detalle que para entrar tienes que pagar, creo que este conocimiento y esta plataforma deber??an de ser mucho m??s libre y accesible a cualquier persona.</p>

                        <p className="Home-View-Project-Text-Label">Actualmente estoy terminando la preparatoria en l??nea y como proyecto final simule la idea de crear un curso en el cual ense??arles a las personas sobre finanzas personales y m??s importante a las generaciones futuras informarles que el gobierno actual no tiene planeado ning??n tipo de retiro financiero para ellos y que sabiendo esto se interesen aun m??s en las finanzas.</p>

                        <p className="Home-View-Project-Text-Label">As?? que decid?? combinar mi proyecto anterior titulado PayAll (a falta de un nombre m??s creativo) y mi proyecto final. </p>

                        <p className="Home-View-Project-Text-Label">Les presento el simulador de mercado de PayAll solo tienes que registrar tu usuario y contrase??a, para acceder a una cuenta en la que se otorgara de un <a>$ 1,000,042.00 MXN ficticios</a> para que simules compras y ventas en el mercado de acciones y criptomonedas, si??ntete libre de competir y demostrar tus habilidades.</p>

                        <p className="Home-View-Project-Text-Label">Tambi??n en caso de que no tengas mucha idea sobre inversiones y finanzas personales puedes acceder a muchos art??culos en los cuales se ense??a sobre los temas. Espero te sirva, si aun as?? tienes dudas no dudes en contactarme a trav??s de mi correo <a href="mailto:armandoperalta.simulator@webdesignnodes.com">armandoperalta.simulator@webdesignnodes.com</a>  o a trav??s de mi cuenta de Twitter <a href="https://twitter.com/XxTavo16xX">@XxTavo16xX</a></p>

                        <p className="Home-View-Project-Text-Label">Espero les guste. A competir.</p>

                    </div>

                    <div className="Home-View-Project-Animation-Container">

                        <Lottie animationData={tradingAnimation} loop={true} />

                    </div>

                </div>

                <div className="Home-View-Project-Keywords-Container">

                    <div className="Home-View-Project-Slider-Contanier">

                        <div className="Home-View-Project-Slider-Option-Container">

                            <p className="Home-View-Project-Slider-Option-Title-Label">Mision</p>
                            <p className="Home-View-Project-Slider-Option-Subtitle-Label">Informar a j??venes adultos c??mo lograr una vida financiera saludable con ahorro, inversiones y pensamiento cr??tico en compras. Demostrar que la planificaci??n conduce a resultados futuros, evitando depender de hijos.</p>

                        </div>

                        <div className="Home-View-Project-Slider-Option-Container">

                            <p className="Home-View-Project-Slider-Option-Title-Label">Aprende</p>
                            <p className="Home-View-Project-Slider-Option-Subtitle-Label">Nutre tu conocimiento sobre las finanzas personales a trav??s de art??culos publicades por entidades bancarias y de la mano de expertos en la materia.</p>

                        </div>

                        <div className="Home-View-Project-Slider-Option-Container">

                            <p className="Home-View-Project-Slider-Option-Title-Label">Estrategia</p>
                            <p className="Home-View-Project-Slider-Option-Subtitle-Label">Mediante un curso de 6 meses aprende sobre finanzas personales y estrategias de inversi??n y ahorro con el fin de preparar a los usuarios para crear su propia estrategia de inversi??n para el retiro laboral</p>

                        </div>                        

                        <div className="Home-View-Project-Slider-Option-Container">

                            <p className="Home-View-Project-Slider-Option-Title-Label">Simula</p>
                            <p className="Home-View-Project-Slider-Option-Subtitle-Label">Demuestra tus habilidades a trav??s del simulador de mercado de PayAll</p>

                        </div>

                    </div>

                </div>


            </div>


        </section>

    )

}

const ArticlesList = () => {

    const [articlesData, setarticlesData] = useState([])

    useEffect(() => {
        getArticlesData()
            .then(data => {
                setarticlesData(data);
            });
    }, [])

    return (

        <section className="Home-View-Articles-Section" id="learn">

            <div className="Home-View-Articles-Background"></div>

            <div className="Home-View-Articles-Content">

                <div className="Home-View-Articles-Margin">

                    <h3 className="Home-View-Articles-Title-Label">Articulos para aprender</h3>
                    <p className="Home-View-Article-Subtitle">A continuaci??n, encontraras art??culos que te pueden ser de ayuda.</p>

                    <div className="Home-View-Articles-Container">

                        <div className="Home-View-Articles-Container-Margin">

                            {

                                articlesData.map(element => {

                                    return (

                                        <div className="Article-Container" key={element.articleLink}><a href={element.articleLink} target='_blank'>

                                            <div className="Article-Container-Image-Container">

                                                <img src={element.articleImages} className="Article-Container-Image" />

                                            </div>

                                            <div className="Article-Container-Info-Container">

                                                <p className="Article-Info-Title-Label">{element.articleName}</p>

                                                <p className="Article-Info-Subtitle-Label">{element.articleSubtitle}</p>

                                                <p className="Article-Info-Author-Label">{element.articleAuthor}</p>

                                            </div>

                                        </a></div>

                                    )

                                })

                            }

                        </div>

                    </div>

                </div>

            </div>


        </section>



    )



}

const SimulatorSection = () => {

    return (

        <div className="Home-View-Simulator-Container">

            <div className="Home-View-Simulator-Background"></div>

            <div className="Home-View-Simulator-Content">

                <div className="Home-View-Simulator-Margin">

                    <h4 className="Home-View-Simulator-Title-Label" >Accede al simulador para competir por tener el mejor rendimiento</h4>

                </div>

            </div>

        </div>

    )

}

const MarketSection = () => {

    return (

        <div className="Home-View-Market-Container" id="market">

            <div className="Home-View-Market-Background"></div>

            <div className="Home-View-Market-Content">

                <div className="Home-View-Market-Margin">

                    <h4 className="Home-View-Market-Title-Label" >Conoce el estado actual de los diferentes mercados</h4>

                    <MarketContainer />

                </div>

            </div>

        </div>

    )

}

const MarketContainer = () => {

    const { context, setContext } = useContext(AppContext)

    const changeMarketSelected = (marketToDisplay) => {

        if (!marketToDisplay) return

        setContext({ app: { ...context.app, current_market: marketToDisplay }, user: { ...context.user } })

    }

    return (

        <div className="Market-Container-Box">

            <p className="Market-Info-Display-Title">Selecciona el mercado que deseas ver</p>

            <div className="Market-Info-Display-Controller">

                <div className={context.app.current_market == 'SNP500' ? "Market-Info-Select-Button Market-Info-Selected-Option" : "Market-Info-Select-Button"} onClick={() => changeMarketSelected('SNP500')}>

                    Mercado Internacional

                </div>

                <div className={context.app.current_market == 'crypto' ? "Market-Info-Select-Button Market-Info-Selected-Option" : "Market-Info-Select-Button"} onClick={() => changeMarketSelected('crypto')}>

                    Mercado de criptomonedas

                </div>

            </div>

            <div className="Market-Info-Display-View">

                <div className="Market-Info-Top-Container">

                    <div className="Market-Info-Title-Table-Row-Container">

                        <div className="Market-Info-Title-Container">
                            <p className="Market-Info-Title-Label">Nombre</p>
                        </div>

                        <div className="Market-Info-Title-Container">
                            <p className="Market-Info-Title-Label">Precio Actual</p>
                        </div>

                        <div className="Market-Info-Title-Container">
                            <p className="Market-Info-Title-Label">Cambio 24h</p>
                        </div>

                        <div className="Market-Info-Title-Container">
                            <p className="Market-Info-Title-Label">Volumen 24h</p>
                        </div>

                    </div>

                    {

                        // * This will display the results of the market selected
                        context.app.current_market == 'SNP500' ? <SNPMarketTableResults /> : <CryptoMarketTableResults />

                    }

                </div>

            </div>

            <div className="Market-Info-Warning">

                <p className="Market-Info-Warning-Label">Los datos del mercado mostrados en nuestra plataforma pueden ser inexactos y est??n sujetos a cambios. Payall no garantiza que estos datos representen el estado del mercado en tiempo real. Se trata de aproximaciones solo a efectos informativos y simulativos.</p>

            </div>

        </div>

    )



}

const CryptoMarketTableResults = () => {

    console.log('displaying crypto');

    const [cryptoMarketDataReceived, setcryptoMarketDataReceived] = useState([])

    useEffect(() => {
        getMarketData('crypto')
            .then(data => {
                setcryptoMarketDataReceived(data);
            });
    }, [])

    return (

        Object.keys(cryptoMarketDataReceived).map((currentElementName) => {

            const currentElementValues = cryptoMarketDataReceived[currentElementName]

            return (

                <div className="Market-Info-Row-Container" key={currentElementName}>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{currentElementName}</p>
                    </div>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{formatToCurrency(currentElementValues.mxn)}</p>
                    </div>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{formatToPercentage([currentElementValues.mxn_24h_change / 100])}</p>
                    </div>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{formatToCurrency(currentElementValues.mxn_24h_vol)}</p>
                    </div>

                </div>

            )

        })

    )

}

const SNPMarketTableResults = () => {

    const [SNPMarktedDataReceived, setSNPMarktedDataReceived] = useState([])

    useEffect(() => {
        getMarketData('SNP500')
            .then(data => {
                setSNPMarktedDataReceived(data);
            });
    }, [])

    return (

        SNPMarktedDataReceived.map(element => {

            return (

                <div className="Market-Info-Row-Container" key={element.symbol}>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{element.name}</p>
                    </div>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{formatToCurrency([element.price * 18.66])}</p>
                    </div>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{element.change}</p>
                    </div>

                    <div className="Market-Info-Row-Title-Container">
                        <p className="Market-Info-Text-Label">{formatToCurrency(element.volume)}</p>
                    </div>

                </div>

            )

        })

    )
}


export default Home_view