import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    //en el useEffect, si yo dejo el listado de dependencias vacias, solo se va a disparar
    //la primera vez que se renderice el componente
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}
