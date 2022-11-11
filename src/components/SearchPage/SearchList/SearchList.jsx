import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './SearchList.module.css';

const SearchList = ({ people }) => (
  <>
  {!people.length ? 
    (<h2 className={styles.search__comment} >No Results</h2>)
    :
    (
      <ul className={styles.list__container}>
        {people.map(({id, name, imgUrl}) => (
          <li key={id} className={styles.list__item}>
            <Link to={`/person/${id}`}>
              <img className={styles.item__image} src={imgUrl} alt={name} />
              <p className={styles.item__label} >{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
  </>
)

SearchList.propTypes = {
  people: PropTypes.array,
}

export default SearchList;