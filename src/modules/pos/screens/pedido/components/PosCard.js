import React, {useEffect, useState} from "react";
import { getMenuCategorias } from "../../../../../services/MenuCategorias";

const PosCard = () => {
    
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getMenuCategorias().then(data => {
                setCategorias(data)
                setCargando(false);
        })
    }, []);

  return (
    <>
    
      <div className="card__main ">

    
          {
              categorias.map(objCategoria => {
                  return (<div key={objCategoria.menu_cat} className="card__box">
                  <img
                    alt={objCategoria.cat}
                    src="https://img.icons8.com/cotton/2x/cake.png"
                    width="60px"
                    height="60px"
                  />
                  <p style={{textAlign:"center"}}  >{objCategoria.menu_nom}</p>
                </div>);
              })
          }
      </div>
    </>
  );
};

export default PosCard;
