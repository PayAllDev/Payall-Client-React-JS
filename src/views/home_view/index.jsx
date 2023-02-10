// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";
import { isMobileDevice } from "../../lib/system";
// import { isMobileDevice } from "../../lib/system";

// * view Styles

import '../styles/home_view/index.css'

// * Components Required

// * view to Return

const Home_view = () => {

    const { context, setContext } = useContext(AppContext)

    if(context.app.current_view == 'Home') return (

        <div className="Home-View-Container">

            <div className="Home-View-Background">

                <div className="Home-Background-Shape-0"></div>
                <div className="Home-Background-Shape-1"></div>

            </div>

            <div className="Home-View-Content">

                

            </div>

        </div>

    )

}

export default Home_view