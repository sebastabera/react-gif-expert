import {useState} from 'react';
import { ChangeSearch, SearchResultGrid, SendEmail } from './components';

export const UserSegmentationApp = () => {

    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    const onChangeSearch = (newSearch) => {
        if(search === newSearch) return;
        setSearch(newSearch);
    };

    const onChangeProducts = (productsUser) => {
        if(productsUser.length < 1) return;
        setProducts(productsUser);
    };

  return (
    <>

        <h1>User Segmentation App</h1>

        <ChangeSearch 
            onNewSearch={value => onChangeSearch(value)}/>

        {
            products.length > 0 &&
                <SendEmail 
                    products={products} user={search} />
        }
        {search !== '' && 
            <SearchResultGrid key={search} search={search} onChangeProducts={value => onChangeProducts(value)}/>
        }


    </>
  )
}
