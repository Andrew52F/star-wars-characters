import React, { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
          {title: t('personInfo.height'), value: data.height},
          {title: t('personInfo.mass'), value: data.mass},
          {title: t('personInfo.gender'), value: data.gender},
          {title: t('personInfo.birthYear'), value: data.birth_year},
          {title: t('personInfo.hairColor'), value: data.hair_color}, 
          {title: t('personInfo.skinColor'), value: data.skin_color},
          {title: t('personInfo.eyeColor'), value: data.eye_color}
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