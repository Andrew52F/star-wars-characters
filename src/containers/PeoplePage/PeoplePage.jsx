import { useEffect, useState } from 'react';
 // import styles from './PeoplePage.module.css';
import getApiData from '../../utils/network'
import { PEOPLE_LIST } from '../../constants/api';
import { getPersonId, getPersonImgUrl } from '../../services/getPeopleData';

import PeopleList from '../../components/PeoplePage/PeopleList';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const getResource = async (url) => {
    const data = await getApiData(url)
    setPeople(data.results.map(({name, url}) =>{
      const id = getPersonId(url);
      const imgUrl = getPersonImgUrl(id)
      return {id, name, imgUrl}
    }))
  }
  useEffect(() => {
    getResource(PEOPLE_LIST)
  }, [])
  return (
    <>
    <ul>
    {people && <PeopleList people={people} />}
    </ul>
    </>
  )
}

export default PeoplePage; 