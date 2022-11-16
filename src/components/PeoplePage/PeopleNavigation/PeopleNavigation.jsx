import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { SWAPI_PEOPLE,  SWAPI_PARAM_PAGE } from '@constants/api';
import UiButton from '@components/UI/UiButton';

import styles from './PeopleNavigation.module.css';


const PeopleNavigation = ({ getResource, prevPage, nextPage, currPageId}) => {
  const { t } = useTranslation(); 
  const handleClickNext = () => getResource(nextPage);
  const handleClickPrev = () => getResource(prevPage);


  return (
    <div className={styles.container}>
      <Link className={styles.buttons} to={`/${SWAPI_PEOPLE+SWAPI_PARAM_PAGE}${currPageId-1}`}>
        <UiButton
          onClick={handleClickPrev}
          text={t('listNavButtons.prev')}
          disabled={!prevPage}
        />
      </Link>
      <Link className={styles.buttons} to={`/${SWAPI_PEOPLE+SWAPI_PARAM_PAGE}${currPageId+1}`}>
      <UiButton
          onClick={handleClickNext}
          text={t('listNavButtons.next')}
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