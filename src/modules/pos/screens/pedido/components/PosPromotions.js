import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { getPromocionesCategorias } from "../../../../../services/Promociones";

const PosPromotions = () => {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getPromocionesCategorias().then((data) => {
      setCategorias(data);
      setCargando(false);
    });
  }, []);

  const breakPoints = [
    { widht: 500, itemsToShow: 2 },
    { widht: 750, itemsToShow: 2 },
    { widht: 1200, itemsToShow: 2 },
    { widht: 1500, itemsToShow: 2 },
  ];
  return (
    <>
      <div className="promotions__cards">
        <div className="promotions__box slider owl-carousel">
          <Carousel breakPoints={breakPoints}>
            {categorias.map((objCategoria) => {
              return (
                <div className="blog-card">
                  <div className="meta">
                    <div
                      className="photo"
                      style={{
                        backgroundImage:
                          "url(" + "https://picsum.photos/200/300" + ")",
                      }}
                    ></div>
                    <ul className="details">
                      <li className="date">{objCategoria.Fecha}</li>
                    </ul>
                  </div>
                  <div className="description">
                    <h1>{objCategoria.Titulo}</h1>
                    <h2>{objCategoria.Subtitulo}</h2>
                    <p>
                      {objCategoria.Descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default PosPromotions;
