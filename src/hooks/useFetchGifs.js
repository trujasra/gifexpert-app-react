import { useEffect, useState } from "react";
import { ObtenerGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImage = async () => {
        const nuevaImagen = await ObtenerGifs(category);
        setImagenes(nuevaImagen);
        setIsLoading(false);
    }

    useEffect(() => {
        getImage();
    }, []);

    return {
        imagenes,
        isLoading
    }
}