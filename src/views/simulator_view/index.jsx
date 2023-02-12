// * Dependencies Required 

import { useContext, useState, useEffect } from "react";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md"


// * Modules Required

import { AppContext } from "../../app/Context";
import { getMarketDataSimulator } from "../../services";
import { formatToCurrency, formatPercentage, formatToNumber } from "../../lib/display";

// * view Styles

import '../styles/simulator_view/index.css'

// * Components Required

// * view to Return

const SimulatorView = () => {

    const { context, setContext } = useContext(AppContext)

    if (context.app.current_view == 'Simulator') return (

        <Simulator_Desktop />

    )

}

const Simulator_Desktop = () => {

    const [marketDataReceived, setMarketDataReceived] = useState([])

    useEffect(() => {
        getMarketDataSimulator('SNP500')
            .then(data => {
                setMarketDataReceived(data);
            });
    }, [])

    return (

        <div className="Simulator-View-Desktop-Container">

            <MobileLateralMenu />

            <div className="Simulator-View-Margin">

                <div className="Simulator-Top-Bar">

                    <div className="Simulator-Top-Market-State">

                        <div className="Market-Search-Container">

                            <input className="Market-Search-Input" type="text" placeholder="Buscar elemento" />

                        </div>

                        <div className="Market-Local-Currency-SelecBox">

                            <div className="Market-Local-Currency-SelecBox-Margin">

                                <p className="Market-Local-Currency-Selected-Label">Peso Mexicano</p>

                                <MdKeyboardArrowDown size={30} color='#01061d' />

                            </div>

                        </div>

                    </div>

                    <div className="Simulator-Top-Market-Options">

                        <div className="Simulator-Market-Option-Button Simulator-Market-Option-Selected">

                            Mercado Internacional (S&P 500)

                        </div>

                        <div className="Simulator-Market-Option-Button">

                            Mercado de criptomonedas

                        </div>

                        <div className="Simulator-Market-Option-Button">

                            Clasificacion

                        </div>

                    </div>

                    <div className="Simulator-Top-Market-Curreny">

                        <div className="Simulator-Currency-Container">

                            USD: $18.66

                        </div>

                        <div className="Simulator-Currency-Container">

                            EUR: $19.93

                        </div>

                    </div>

                </div>

                <div className="Simulator-Market-Wallet-Container">

                    <div className="Simulator-Market-Container">

                        <div className="Simulator-Title-Container">

                            <p className="Simulator-Title-Label">Informacion de mercado</p>

                        </div>

                        <div className="Simulator-Market-Table-Header">

                            <div className="Simulator-Market-Data-Container">

                                <p className="Simulator-Market-Data-Label">Nombre</p>

                            </div>

                            <div className="Simulator-Market-Data-Container">

                                <p className="Simulator-Market-Data-Label">Precio</p>

                            </div>

                            <div className="Simulator-Market-Data-Container">

                                <p className="Simulator-Market-Data-Label">Cambio</p>

                            </div>

                            <div className="Simulator-Market-Data-Container">

                                <p className="Simulator-Market-Data-Label">Volumen</p>

                            </div>

                            <div className="Simulator-Market-Data-Container">

                                <p className="Simulator-Market-Data-Label">Movimiento</p>

                            </div>

                        </div>

                        <div className="Simulator-Market-Result-Table-Container">

                            {

                                marketDataReceived.map(element => {

                                    return (

                                        <div className="Simulator-Market-Table-Header" key={element.symbol}>

                                            <div className="Simulator-Market-Data-Container">

                                                <p className="Simulator-Market-Value-Label">{element.symbol + ' - ' + element.name}</p>

                                            </div>

                                            <div className="Simulator-Market-Data-Container">

                                                <p className="Simulator-Market-Value-Label">{formatToCurrency([element.price * 19.69])}</p>

                                            </div>

                                            <div className="Simulator-Market-Data-Container">

                                                <p className="Simulator-Market-Value-Label">{formatPercentage(element.changesPercentage)}</p>

                                            </div>

                                            <div className="Simulator-Market-Data-Container">

                                                <p className="Simulator-Market-Value-Label">{formatToNumber(element.volume)}</p>

                                            </div>

                                            <div className="Simulator-Market-Data-Container Simulator-Market-Action-Container">

                                                <div className="Simulator-Market-Button Simulator-Market-Buy"> Comprar </div>
                                                <div className="Simulator-Market-Button Simulator-Market-Sell"> Vender </div>

                                            </div>

                                        </div>

                                    )

                                })

                            }

                        </div>

                    </div>

                    <div className="Simulator-Wallet-Container">

                        <div className="Simulator-Title-Container">

                            <p className="Simulator-Title-Label">Cartera</p>

                        </div>

                        <div className="Simulator-Wallet-Balance-Container">

                            <div className="Simulator-Wallet-Balance-Data-Container">

                                <div className="Simulator-Wallet-Balance-Box">

                                    <p className="Simulator-Wallet-Data-Title-Label">Balance</p>

                                    <p className="Simulator-Wallet-Data-Value-Label">$1,000,042.00</p>

                                </div>

                                <div className="Simulator-Wallet-Status-Box">

                                    <p className="Simulator-Wallet-Data-Title-Label">Estado</p>

                                    <p className="Simulator-Wallet-Data-Value-Label">Sin cambios</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

const MobileLateralMenu = () => {

    const clickHandler = () => {

        document.getElementById('Lateral-Menu-Container').style.transform = 'translateX(100%)'

        setTimeout(() => { document.getElementById('Lateral-Menu-Container').style.display = 'none' }, 300)

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

export default SimulatorView