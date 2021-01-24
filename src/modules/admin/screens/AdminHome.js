import React, { useState}from 'react'
import PosCard from '../components/PosCard'
import PosHeader from '../components/AdminHeader'
import PosPromotions from '../components/PosPromotions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch , faCog, faUserCircle} from "@fortawesome/free-solid-svg-icons"

const PosPedidoScreen = () => {
    
    const [termino, setTermino] = useState("");

    return (
        <>
    <PosHeader/>
    <main className="main">
        <div className="menu__main">
            <h2 className="menu__text">Menu</h2> <button className="btn__menu"> <FontAwesomeIcon icon={faCog} /> </button>
        </div>
        <PosCard termino={termino}/>
    <div className="promotions__main">
        <h2 className="menu__text">Promociones</h2>
    </div>
        <PosPromotions/>
        <div className="multi-button">

        </div>
    </main>   
        </>
    )
}

export default PosPedidoScreen
