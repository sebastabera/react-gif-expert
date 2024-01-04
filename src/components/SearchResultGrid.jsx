import PropTypes from 'prop-types';
import { useFetchProducts } from "../hooks/useFetchProducts";
import { SearchItem } from "./SearchItem";

export const SearchResultGrid = ({search, onChangeProducts}) => {

    const {products, isLoading} = useFetchProducts(search);
    onChangeProducts(products);

    return (
        <>
            
            <h4>Recomendaciones para: {search}</h4>
            {
                isLoading && ( <h2>Cargando</h2> )
            }
            <div className="card-grid">
                {products.map((product) => (
                    <SearchItem key={product.id} {...product} />
                ))}
            </div>
            
        </>
    )
}

SearchResultGrid.propTypes = {
    search: PropTypes.string.isRequired,
    onChangeProducts: PropTypes.func.isRequired
}
