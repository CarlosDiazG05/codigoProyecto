import React from 'react'
import PosCard from './components/PosCard'
import PosHeader from './components/PosHeader'
import PosPromotions from './components/PosPromotions'


const PosPedidoScreen = () => {
    return (
        <>
    <PosHeader/>
    <main className="main">
        <div className="menu__main">
            <h2 className="menu__text">Menu</h2>
        </div>
        <PosCard/>
    <div className="promotions__main">
        <h2 className="menu__text">Promociones</h2>
    </div>
        <PosPromotions/>
    </main>   
        </>
    )
}

export default PosPedidoScreen
