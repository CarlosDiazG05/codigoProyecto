import { URL_BACKEND } from "../../../enviroments/enviroment"

export const getPromocionesCategorias = async () => {
    const peticion = await fetch(`${URL_BACKEND}/Promociones`);
    const data = await peticion.json();
    return data;
}