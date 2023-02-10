// * Dependencies Required 

import { useContext } from "react";
import Lottie from "lottie-react";


// * Modules Required

import { AppContext } from "../../app/Context";
import { isMobileDevice } from "../../lib/system";
// import { isMobileDevice } from "../../lib/system";

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

    test()

    return (

        <div className="Home-View-Desktop-Container">

            <TopSection />
            <ProjectSection />
            <ArticlesList />
            <SimulatorSection />
            <MarketSection />

        </div>

    )

}

const TopSection = () => {

    return (

        <section className="Home-View-Container">

            <div className="Home-View-Background">

                <div className="Home-Background-Shape-0"></div>
                <div className="Home-Background-Shape-1"></div>

            </div>

            <div className="Home-View-Content">

                <div className="Home-View-Margin">

                    <div className="Home-View-Text-Left-Side">

                        <h1 className="Home-View-Title-Label">Aprende sobre inversiones y crea un plan de retiro</h1>
                        <p className="Home-View-subtitle-Label" >Sabias que el gobierno actual no resuelve un problema a futuro muy grande?</p>
                        <p className="Home-View-subtitle-Label" >Pues ese problema es una estrategia de inversion para la poblecion de mexico</p>
                        <p className="Home-View-subtitle-Label" >Aqui podras aprender tecnicas para aprender finanzas personales y como crear estrategias de inversion seguras</p>

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

        <section className="Home-View-Project-Section">

            <div className="Home-View-Project-Background"></div>

            <div className="Home-View-Project-Content">

                <div className="Home-View-Project-Margin">

                    <div className="Home-View-Project-Text-Container">

                        <h2 className="Home-View-Project-Title-Label"><span className="Home-View-Project-Title-Decoration-Label">Conoce </span>mas sobre este proyecto.</h2>

                        <p className="Home-View-Project-Text-Label">Hola soy <a>Armando Octavio Peralta Ramirez</a> y desde hace varios meses he estado trabajando en desarrollar un Exchange de activos financieros, pero por falta de interés e inversión no logre lanzar el proyecto. En los últimos años he participado en una competencia creada por el agrupo Actinver llamada Reto Actinver en la cual por el pago de $ 1000.00 MXN las personas se unen al reto el cual te permite aprender y usar un simulador de mercado, el mejor tras 3 meses de inversiones se gana $ 500,000 MXN, esta iniciativa me gusta mucho sin embargo no me gusta el detalle que para entrar tienes que pagar, creo que este conocimiento y esta plataforma deberían de ser mucho más libre y accesible a cualquier persona.</p>

                        <p className="Home-View-Project-Text-Label">Actualmente estoy terminando la preparatoria en línea y como proyecto final simule la idea de crear un curso en el cual enseñarles a las personas sobre finanzas personales y más importante a las generaciones futuras informarles que el gobierno actual no tiene planeado ningún tipo de retiro financiero para ellos y que sabiendo esto se interesen aun más en las finanzas.</p>

                        <p className="Home-View-Project-Text-Label">Así que decidí combinar mi proyecto anterior titulado PayAll (a falta de un nombre más creativo) y mi proyecto final. </p>

                        <p className="Home-View-Project-Text-Label">Les presento el simulador de mercado de PayAll solo tienes que registrar tu usuario y contraseña, para acceder a una cuenta en la que se otorgara de un $ <a>1,000,000.00 MXN ficticios</a> para que simules compras y ventas en el mercado de acciones y criptomonedas, siéntete libre de competir y demostrar tus habilidades.</p>

                        <p className="Home-View-Project-Text-Label">También en caso de que no tengas mucha idea sobre inversiones y finanzas personales puedes acceder a muchos artículos en los cuales se enseña sobre los temas. Espero te sirva, si aun así tienes dudas no dudes en contactarme a través de mi correo <a href="mailto:armandoperalta.simulator@webdesignnodes.com">armandoperalta.simulator@webdesignnodes.com</a>  o a través de mi cuenta de Twitter <a href="https://twitter.com/XxTavo16xX">@XxTavo16xX</a></p>

                        <p className="Home-View-Project-Text-Label">Intentare conseguir algún tipo de certificación y un premio para los mejores en la plataforma. </p>

                        <p className="Home-View-Project-Text-Label">Espero les guste. A competir.</p>

                    </div>

                    <div className="Home-View-Project-Animation-Container">

                        <Lottie animationData={tradingAnimation} loop={true} />

                    </div>

                </div>


            </div>


        </section>

    )

}

const ArticlesList = () => {

    return (

        <section className="Home-View-Articles-Section">

            <div className="Home-View-Articles-Background"></div>

            <div className="Home-View-Articles-Content">

                <div className="Home-View-Articles-Margin">

                    <h3 className="Home-View-Articles-Title-Label">Articulos para aprender</h3>
                    <p className="Home-View-Article-Subtitle">A continuación, encontraras artículos que te pueden ser de ayuda proveídos por Banamex, Reto Actinver y new Bing search</p>

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

        <div className="Home-View-Market-Container">

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

    return (

        <div className="Market-Container-Box">

            <p className="Market-Info-Display-Title">Selecciona el mercado que deseas ver</p>

            <div className="Market-Info-Display-Controller">


                <div className="Market-Info-Select-Button Market-Info-Selected-Option">

                    Mercado Internacional

                </div>

                <div className="Market-Info-Select-Button">

                    Mercado Nacional

                </div>
                <div className="Market-Info-Select-Button">

                    Mercado de criptomonedas

                </div>


            </div>

            {




            }

        </div>

    )

}

export default Home_view