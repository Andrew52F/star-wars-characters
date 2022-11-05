import PropTypes from 'prop-types';
import styles from './PersonImage.module.css'

const PersonImage = ({imgUrl, name}) => {
  return (
    <>
    <div className={styles.container}>
      <img src={imgUrl} alt={name}  className={styles.image} />
    </div>
    </>
  )
}
PersonImage.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string
}

export default PersonImage;