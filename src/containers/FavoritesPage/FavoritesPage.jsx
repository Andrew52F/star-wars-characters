import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList'


import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const data = Object.entries(storeData).map(([id, values]) => {
      return { id, ...values};
    })
    setPeople(data);
  },[])
  return (
    <>
      <h1 className='header__text'>Favorites</h1>
      {people.length ? (<PeopleList people={people} />)
      :
      (<h2 className={styles.comment}> No data</h2>)
      }
    </>
  )
}

export default FavoritesPage;