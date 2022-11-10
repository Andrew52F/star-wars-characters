import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';

import { SWAPI_PEOPLE,  SWAPI_PARAM_PAGE } from '@constants/api';
import UiButton from '@components/UI/UiButton';

import styles from './PeopleNavigation.module.css';


const PeopleNavigation = ({ getResource, prevPage, nextPage, currPageId}) => {
  const handleClickNext = () => getResource(nextPage);
  const handleClickPrev = () => getResource(prevPage);


  return (
    <div className={styles.container}>
      <Link className={styles.buttons} to={`/${SWAPI_PEOPLE+SWAPI_PARAM_PAGE}${currPageId-1}`}>
        <UiButton
          onClick={handleClickPrev}
          text={'Previous'}
          disabled={!prevPage}
        />
      </Link>
      <Link className={styles.buttons} to={`/${SWAPI_PEOPLE+SWAPI_PARAM_PAGE}${currPageId+1}`}>
      <UiButton
          onClick={handleClickNext}
          text={'Next'}
          disabled={!nextPage}
        />
      </Link>
    </div>
  )
}


PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  currPageId: PropTypes.number
}

export default PeopleNavigation; 