import { useEffect, useState } from "react";
import { getProductsServer } from "../helpers/getProducts"

export const useFetchProducts = (search) => {
  
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async() => {
        const newProducts = await getProductsServer(search);
        setProducts(newProducts);
        setIsLoading(false);
    };

    //en el useEffect, si yo dejo el listado de dependencias vacias, solo se va a disparar
    //la primera vez que se renderice el componente
    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
        isLoading
    }

}
