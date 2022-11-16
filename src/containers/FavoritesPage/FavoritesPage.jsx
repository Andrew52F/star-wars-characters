import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import PeopleList from '@components/PeoplePage/PeopleList'


import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const { t } = useTranslation();
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
      <h1 className='header__text'>{t('headerText.favorites')}</h1>
      {people.length ? (<PeopleList people={people} />)
      :
      (<h2 className={styles.comment}>{t('errors.noDataMessage')}</h2>)
      }
    </>
  )
}

export default FavoritesPage;