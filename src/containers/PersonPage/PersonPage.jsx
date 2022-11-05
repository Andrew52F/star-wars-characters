import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonImage from '@components/PersonPage/PersonImage';

import getApiData from '@utils/network';
import { PERSON_DATA } from '@constants/api';
import { withErrorApi } from '@components/hocs/withErrorApi';
import { getPersonImgUrl } from '@services/getPeopleData';
import styles from './PersonPage.module.css';

const PersonPage = ({ setApiError }) => {
  const [ personName, setPersonName ] = useState(null);
  const [personImgUrl, setPersonImgUrl] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [filmList, setFilmList] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getApiData(`${PERSON_DATA}/${id}/`);
      if (data) { 
        const { name, height, mass, gender, birth_year, hair_color, skin_color, eye_color, films } = data;
        setPersonInfo([
          {title: 'Height', value: height},
          {title: 'Mass', value: mass},
          {title: 'Gender', value: gender},
          {title: 'Birth year', value: birth_year},
          {title: 'Hair color', value: hair_color}, 
          {title: 'Skin color', value: skin_color},
          {title: 'Eye color', value: eye_color}
        ]); 
        setFilmList(films);
        setPersonName(name);
        setPersonImgUrl(getPersonImgUrl(id));
        setApiError(false); 
      } else {
        setApiError(true);
      }
    })()
  },[id])
  console.log(personInfo)
  return (
    <>
    <div className={styles.wrapper}>
      <span className={styles.person__name}>{personName}</span>
      <div className={styles.container}>
        {personImgUrl && (<PersonImage  name={personName} imgUrl={personImgUrl} />)}
        {personInfo && (<PersonInfo info={personInfo} />)}
      </div>
    </div>
    </>
  ) 
}

PersonPage.propTypes = {
  setApiError: PropTypes.func
}

export default withErrorApi(PersonPage);