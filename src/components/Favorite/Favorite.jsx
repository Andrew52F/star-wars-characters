import { useState, useEffect } from "react";
import { Link }  from "react-router-dom";
import { useSelector } from 'react-redux';
import routes from '@routes/routesConfig.js'; 
import bookmarkIcon from'./img/bookmark.svg';
import styles from './Favorite.module.css';

const Favorite = () => {
  const storeData = useSelector(store => store.favoriteReducer);
  const [count, setCount ] = useState();

  useEffect(() => {
    const length = Object.keys(storeData).length;
    const dots = '...';
    const numbers = length.toString().length;
    numbers > 2 ? setCount(dots) : setCount(length);
    
  }, [storeData])

  return (
    <div className={styles.container}>
      <Link to={routes.favorites}>
        <img className={styles.icon} src={bookmarkIcon} alt="Favorites" />
        <span className={styles.counter}>{count}</span>
      </Link>
    </div>
  )
}

export default Favorite;