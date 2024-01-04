import {useState} from 'react';
import { ChangeSearch, SearchResultGrid } from './components';

export const UserSegmentationApp = () => {

    const [search, setSearch] = useState('');
    const [recomendations, setRecomendations] = useState([]);

    const onChangeSearch = (newSearch) => {
        if(search === newSearch) return;
        setSearch(newSearch);
        //setCategories(cat => [...cat, 'Dragon Ball']);
    };
    console.log(search);

  return (
    <>

        <h1>User Segmentation App</h1>

        <ChangeSearch 
            onNewSearch={value => onChangeSearch(value)}/>

        {search !== '' && 
            <SearchResultGrid key={search} search={search}/>
        }

    </>
  )
}
