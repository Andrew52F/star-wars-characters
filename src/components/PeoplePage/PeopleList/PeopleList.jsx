import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleList.module.css';

const PeopleList = ({people}) => {
  return (
    <ul className={styles.list__container}>
    {people.map(({id, name, imgUrl}) => 
    <li key={id} className={styles.list__item}>
      <Link to={`/person/${id}`} >
      <img src={imgUrl} alt={name}  className={styles.person__photo}/>
        <p className={styles.person__label}>{name}</p>
      </Link>
    </li>
    )} 
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}



export default PeopleList;