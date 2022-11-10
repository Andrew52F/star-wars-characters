import { useDispatch } from 'react-redux';
import { addPersonToFavorite, removePersonFromFavorite } from '@store/actions';
import PropTypes from 'prop-types';
import styles from './PersonImage.module.css'
import favoriteIconActive from './img/favorite-icon-active.svg';
import favoriteIcon from './img/favorite-icon.svg';

const PersonImage = ({imgUrl, name, id, isFavorite, setIsFavorite}) => {
  const dispatch = useDispatch();

  const handleFavoriteButton = () => {
    if (isFavorite) {
      dispatch(removePersonFromFavorite(id));
      setIsFavorite(false);
    } else {
      dispatch(addPersonToFavorite({ id, name, imgUrl }));
      setIsFavorite(true);
    }
  }

  return (
    <>
    <div className={styles.container}>
      <img src={imgUrl} alt={name}  className={styles.image} />
      <img 
        className={styles.favorite}
        onClick={handleFavoriteButton}
        src={isFavorite ? favoriteIconActive : favoriteIcon}
        alt="Favorite icon"
      />
    </div>
    </>
  )
}
PersonImage.propTypes = {
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  name: PropTypes.string,

  isFavorite: PropTypes.bool,
  setIsFavorite: PropTypes.func,
}

export default PersonImage;