import PropTypes from 'prop-types';

export const SearchItem = ({courseName, url}) => {
  
  return (
    <div className='card'>
        <img src={url} alt={courseName} width='400'/>
        <p>{courseName}</p>
    </div>
  )
}

SearchItem.propTypes = {
  courseName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
