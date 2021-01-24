import { URL_BACKEND } from "../enviroments/enviroment"

export const getMenuCategorias = async () => {
    const peticion = await fetch(`${URL_BACKEND}/MenuCategorias`);
    const data = await peticion.json();
    return data;
}