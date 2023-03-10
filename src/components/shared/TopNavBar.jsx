// * Dependencies Required 
import { useContext } from "react";
import { MdSubject } from "react-icons/md"

// * Modules Required

import { isMobileDevice } from "../../lib/system";

// * view Styles

import './styles/TopNavBar.css'

// * Components Required

// * view to Return

const TopNavBar = () => {

    return (

        <DesktopTopNavBar />

    )


}

// * Desktop TopNavBar Components

const DesktopTopNavBar = () => {

    return (

        <div className="topMenu">

            <div className="topMenuBackground"></div>

            <div className="topMenuContent">

                <TopNavBarLogo />
                <TopNavBarMenu />
                <TopNavBarActionButtons />
                <TopNavBarMobileActionButtonContainer />

            </div>

        </div>


    )

}

const TopNavBarLogo = () => {

    return (

        <div className="menuLogo">

            <a href="./">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="50px"
                    viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet">

                    <g id="logoG" transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)"
                        fill="#ffffff" stroke="none">
                        <path d="M9851 18289 c-87 -15 -346 -129 -966 -426 -148 -71 -310 -147 -359
    -169 -49 -21 -91 -46 -93 -54 -3 -8 -29 -74 -59 -146 -30 -73 -54 -139 -54
    -147 0 -8 66 -59 148 -114 284 -192 576 -358 1447 -823 1037 -553 1525 -837
    1895 -1105 222 -160 426 -348 504 -466 121 -183 169 -763 148 -1792 -6 -303
    -8 -655 -5 -782 3 -126 0 -450 -6 -720 -17 -648 -1 -927 58 -1042 38 -75 198
    -126 401 -127 l125 -1 100 45 c500 222 1079 578 1211 744 l26 33 3 949 c1 522
    8 1404 15 1959 l12 1010 -22 130 c-45 266 -92 429 -170 590 -65 132 -119 198
    -248 301 -400 318 -1042 720 -2032 1271 -168 94 -433 248 -590 343 -563 341
    -789 451 -1070 516 -119 28 -329 40 -419 23z" />
                        <path d="M6575 16455 c-333 -87 -747 -287 -1490 -722 -159 -93 -410 -240 -556
    -326 -147 -85 -412 -237 -590 -338 -661 -372 -920 -538 -1155 -741 -138 -119
    -234 -235 -294 -356 l-30 -61 0 -905 c0 -498 2 -906 4 -906 17 0 323 139 486
    220 359 180 632 344 1295 780 485 319 575 377 780 501 566 341 1037 551 1532
    684 l162 44 108 -29 c238 -62 538 -185 955 -392 582 -287 1191 -638 2208
    -1268 434 -269 563 -340 620 -340 21 0 52 13 89 38 31 21 96 61 146 88 54 29
    115 73 152 109 l61 60 8 130 c4 72 8 351 8 620 1 534 -5 611 -61 790 -21 68
    -33 87 -77 130 -154 151 -631 467 -1248 828 -1342 785 -2636 1389 -2967 1387
    -31 -1 -96 -12 -146 -25z" />
                        <path d="M15740 14643 c0 -1337 -30 -3598 -50 -3723 -5 -36 -17 -113 -25 -172
    -8 -59 -21 -120 -29 -136 -21 -41 -171 -203 -273 -296 -357 -323 -753 -577
    -1583 -1016 -967 -511 -1250 -672 -1555 -885 -165 -116 -283 -253 -345 -406
    -34 -81 -33 -91 13 -159 142 -208 421 -398 1220 -830 l208 -112 47 17 c242 90
    1143 590 2047 1135 121 73 326 189 455 258 638 338 1045 617 1360 932 192 191
    309 357 361 510 35 105 39 276 30 1450 -5 687 -4 1287 2 1610 16 800 -10 1027
    -145 1282 -105 197 -295 384 -558 548 -232 145 -1127 620 -1169 620 -8 0 -11
    -175 -11 -627z" />
                        <path d="M6455 12934 c-163 -24 -186 -33 -365 -138 -447 -263 -1262 -717
    -2399 -1336 -694 -377 -911 -557 -1079 -895 -98 -197 -141 -359 -163 -615 -14
    -154 -15 -433 -11 -2105 3 -1258 10 -1377 91 -1540 129 -259 394 -473 1021
    -825 140 -79 297 -168 349 -199 l94 -55 36 21 c20 11 46 38 58 60 l23 40 5
    754 c3 415 10 934 15 1154 6 220 7 612 4 870 -4 290 -2 583 5 765 l11 295 41
    120 c22 66 67 175 100 243 123 258 211 343 644 623 414 266 747 456 1475 839
    539 283 744 394 930 503 317 184 420 261 461 339 25 49 25 141 -1 228 -18 60
    -27 73 -77 116 -32 27 -132 120 -223 207 -350 336 -523 454 -741 507 -83 20
    -245 33 -304 24z" />
                        <path d="M6830 9646 c-19 -7 -184 -70 -366 -139 -376 -142 -537 -212 -672
    -293 -111 -66 -218 -163 -256 -233 -77 -142 -88 -643 -56 -2451 31 -1765 33
    -1825 60 -2160 9 -113 13 -130 41 -175 104 -169 248 -330 409 -459 319 -257
    1185 -759 2675 -1551 308 -164 628 -335 711 -381 179 -99 215 -113 314 -121
    142 -11 317 35 525 137 164 80 281 152 698 431 257 172 394 257 487 302 l129
    62 1 61 0 60 -162 89 c-577 314 -1807 1002 -2633 1473 -958 545 -955 544
    -1026 619 -120 129 -209 272 -243 394 -25 89 -86 590 -128 1049 -22 234 -23
    289 -23 1250 0 553 2 1169 5 1370 l5 365 -28 59 c-34 73 -155 195 -225 227
    -60 27 -191 36 -242 15z" />
                        <path d="M16975 7865 c-77 -36 -160 -73 -185 -81 -25 -9 -90 -44 -145 -78 -55
    -35 -244 -143 -420 -241 -390 -217 -667 -377 -1055 -610 -1269 -763 -1853
    -1047 -2204 -1072 -183 -13 -590 100 -1017 282 -520 222 -1072 520 -2074 1117
    -537 321 -608 360 -710 400 -185 73 -216 80 -371 81 -163 1 -178 -5 -213 -76
    -43 -89 -51 -164 -68 -632 -17 -483 -12 -697 22 -916 l17 -107 127 -93 c615
    -456 1821 -1181 2716 -1634 586 -296 1045 -486 1307 -539 292 -60 665 61 1388
    452 1610 869 2447 1403 2845 1813 109 113 153 171 191 252 40 88 47 266 40
    937 -8 700 -12 810 -35 810 -9 0 -79 -30 -156 -65z" />
                    </g>
                </svg>
            </a>

        </div>

    )

}

const TopNavBarMenu = () => {

    return (

        <div className="menuNav">

            <nav>

                <ul>

                    <li><a href="#top" id="Menusections3">Inicio</a></li>
                    <li><a href="#project" id="Menusections3">Proyecto</a></li>
                    <li><a href="#learn" id="Menusections3">Aprende con Articulos</a></li>
                    <li><a href="#simulator" id="Menusections3">Simulador</a></li>
                    <li><a href="#market" id="Menusections3">Mercado</a></li>

                </ul>

            </nav>

        </div>

    )

}

const TopNavBarActionButtons = () => {

    return (

        <div className="menuButtons">

            <a href="#">
                <div className="menuRectangularButton menuButton Login" id="menuButtonLogin">

                    <p>Iniciar sesi??n</p>

                </div>
            </a>

            <a href="#">
                <div className="menuRectangularButton menuButton Register" id="menuButtonRegister">

                    <p>Registrarme</p>

                </div>
            </a>

        </div>

    )

}

const TopNavBarMobileActionButtonContainer = () => {

    const clickHandler = () => {

        document.getElementById('Lateral-Menu-Container').style.display = 'flex'
        
        setTimeout(() => { document.getElementById('Lateral-Menu-Container').style.transform = 'translateX(0%)' },50)

    }

    return (

        <div className="Top-Nav-Bar-Mobile-Action-Button-Container" onClick={clickHandler}>

            <div className="Top-Nav-Bar-Mobile-Action-Button">

                <MdSubject size={20} color="#ffffff" />

            </div>

        </div>

    )

}

// * Mobile Menu Components

const MobileTopNavBar = () => {



}

export default TopNavBar