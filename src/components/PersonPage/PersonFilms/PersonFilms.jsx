import { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { fetchArrayOfUrls } from '@utils/network';

import styles from './PersonFilms.module.css';

const PersonFilms = ({filmsList}) => {
  console.log('films :', filmsList)
  const [films, setFilms] = useState([])
  useEffect(() => {
    (async() => {
      const response = await fetchArrayOfUrls(filmsList);
      setFilms(response);
    })()
  }, [])
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {films
          .sort( (a, b) => (a.episode_id) - (b.episode_id))
          .map(({title, episode_id}) => (
            <li key={episode_id} className={styles.list__item}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

PersonFilms.propTypes = {
  filmsList: PropTypes.array
}



export default PersonFilms;