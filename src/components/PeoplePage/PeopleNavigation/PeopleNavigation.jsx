import { Link } from 'react-router-dom';

import { SWAPI_PEOPLE,  SWAPI_PARAM_PAGE } from '@constants/api';

import styles from './PeopleNavigation.module.css';


const PeopleNavigation = ({ getResource, prevPage, nextPage, currPageId}) => {
  console.log(currPageId)
  const handleClickNext = () => getResource(nextPage);
  const handleClickPrev = () => getResource(prevPage);


  return (
    <div>
      <Link className={styles.button} to={`/${SWAPI_PEOPLE+SWAPI_PARAM_PAGE}${currPageId-1}`}>
        <button 
        onClick={handleClickPrev}
        disabled={!prevPage}
        >Previous</button>
      </Link>
      <Link className={styles.button} to={`/${SWAPI_PEOPLE+SWAPI_PARAM_PAGE}${currPageId+1}`}>
        <button 
        onClick={handleClickNext}
        disabled={!nextPage}
        >Next</button>
      </Link>
    </div>
  )
}

export default PeopleNavigation;