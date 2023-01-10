import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@components/hocs/withErrorApi';

import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';

import { PEOPLE_LIST } from '@constants/api';
import { getApiData } from '@utils/network'
import { getPersonId, getPersonImgUrl, getPeoplePageId } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';


const PeoplePage = ({ setApiError }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currPageId, setCurrPageId] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const data = await getApiData(url)
    if (data) {
      setPeople(data.results.map(({name, url}) =>{
        const id = getPersonId(url);
        const imgUrl = getPersonImgUrl(id)
        return {id, name, imgUrl}
      }))
      setPrevPage(data.previous);
      setNextPage(data.next)
      setCurrPageId(getPeoplePageId(url))
    } else {
      setApiError(true);
    }
    
  } 
  useEffect(() => {
    getResource(PEOPLE_LIST+queryPage)
  }, [])
  return (
      <>
      <PeopleNavigation 
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        currPageId={currPageId}
      />
      {people && <PeopleList people={people} />}
      </>
  )
}

PeoplePage.propTypes = {
  setApiError: PropTypes.func
}

export default withErrorApi(PeoplePage); 