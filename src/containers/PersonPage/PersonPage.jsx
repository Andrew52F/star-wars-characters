import React, { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonImage from '@components/PersonPage/PersonImage';
import LinkBack from '@components/PersonPage/LinkBack';
import UiLoader from '@components/UI/UiLoader';

import { getApiData } from '@utils/network';
import { PERSON_DATA } from '@constants/api';
import { withErrorApi } from '@components/hocs/withErrorApi';
import { getPersonImgUrl } from '@services/getPeopleData';
import styles from './PersonPage.module.css';
const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

const PersonPage = ({ setApiError }) => {
  const [ personId, setPersonId ] = useState(null);
  const [ personName, setPersonName ] = useState(null);
  const [personImgUrl, setPersonImgUrl] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [filmsList, setFilmsList] = useState([]);
  const [ isFavorite, setIsFavorite ] = useState(false);
  const storeData = useSelector(store => store.favoriteReducer);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getApiData(`${PERSON_DATA}/${id}/`);

      setPersonId(id);
      storeData[id] ? setIsFavorite(true) : setIsFavorite(false);

      if (data) { 
        setPersonInfo([
          {title: 'Height', value: data.height},
          {title: 'Mass', value: data.mass},
          {title: 'Gender', value: data.gender},
          {title: 'Birth year', value: data.birth_year},
          {title: 'Hair color', value: data.hair_color}, 
          {title: 'Skin color', value: data.skin_color},
          {title: 'Eye color', value: data.eye_color}
        ]); 
        data.films.length && setFilmsList(data.films);
        setPersonName(data.name);
        setPersonImgUrl(getPersonImgUrl(id));
        setApiError(false);
      } else {
        setApiError(true);
      }
    })()
  },[id])
  return (
    <>
    <LinkBack />
    <div className={styles.wrapper}>
      <span className={styles.person__name}>{personName}</span>
      <div className={styles.container}>
        {personImgUrl && (<PersonImage  id={personId} name={personName} imgUrl={personImgUrl} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />)}
        {personInfo && (<PersonInfo info={personInfo} />)}
        {filmsList.length && (
          <Suspense fallback={<UiLoader theme={'light'} shadow />}>
            <PersonFilms filmsList={filmsList} />
          </Suspense>
        )}
      </div>
    </div>
    </>
  ) 
}

PersonPage.propTypes = {
  setApiError: PropTypes.func
}

export default withErrorApi(PersonPage);