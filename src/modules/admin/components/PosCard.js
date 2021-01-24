import React, {useEffect, useState} from "react";
import { getMenuCategorias } from "../services/MenuCategorias";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch , faTrash, faEdit, faChartLine} from "@fortawesome/free-solid-svg-icons"

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
                
                  return (

                  <div key={objCategoria.menu_cat} className="card__box">
                  <img
                    alt={objCategoria.cat}
                    src="https://img.icons8.com/cotton/2x/cake.png"
                    width="60px"
                    height="60px"
                  />
                  <p style={{textAlign:"center"}}  >{objCategoria.menu_nom}</p>
                  <button className=""> </button>
                  <div className="btns__settings">
                    <button className="btn__adminSettings"><FontAwesomeIcon icon={faTrash} /> </button>
                    <button className="btn__adminSettings"><FontAwesomeIcon icon={faEdit} /> </button>
                    <button className="btn__adminSettings"><FontAwesomeIcon icon={faChartLine} /> </button>
                    </div>
                </div>);
              })
          }
      </div>
    </>
  );
};

export default PosCard;
