import PropTypes from 'prop-types';
import { useFetchProducts } from "../hooks/useFetchProducts";
import { SearchItem } from "./SearchItem";

export const SearchResultGrid = ({search}) => {

    const {products, isLoading} = useFetchProducts(search);

    return (
        <>
            
            <h3>Recomendaciones para: {search}</h3>
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
    search: PropTypes.string.isRequired
}
