import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';

const PersonInfo = ({ info }) => {
  
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {info.map(({title, value}) => (
          value && (
            <li key={title} className={styles.list__item}>
              <span className={styles.item__title}>{title}:</span> {value}
            </li>
          )
        ))}
      </ul>
    </div>
  )
}

PersonInfo.propTypes = {
  info: PropTypes.array,
}

export default PersonInfo;