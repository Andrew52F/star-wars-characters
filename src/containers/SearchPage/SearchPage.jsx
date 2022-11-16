import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { getPersonId, getPersonImgUrl } from '@services/getPeopleData';
import { PERSON_SEARCH } from '@constants/api';
import { getApiData } from '@utils/network';

import SearchList from '@components/SearchPage/SearchList';
import UiInput from '@components/UI/UiInput';
import { withErrorApi } from '@components/hocs/withErrorApi'
import styles from './SearchPage.module.css';

const SearchPage = ({setApiError}) => {
  const { t } = useTranslation()
  const [ searchInputValue, setSearchInputValue ] = useState('');
  const [ people, setPeople ] = useState([]);

  const debouncedGetResponse = useCallback(debounce((value) => getResponse(value), 300), []);
  const getResponse = async (value) => {
    const res = await getApiData(PERSON_SEARCH+value);
    if (res) {
      const peopleData = res.results.map(({name, url}) => {
        const id = getPersonId(url);
        const imgUrl = getPersonImgUrl(id);
        return {id, name, imgUrl};
      })
      setPeople(peopleData);
      setApiError(false);
    } else {
      setApiError(true);
    }
  }
  const handleInputChange = (value) => {
    setSearchInputValue(value)
    debouncedGetResponse(value);
  }

  useEffect(() => {
    getResponse('');
  }, [])



  return (
    <>
    <h1 className='header__text'>{t('headerText.search')}</h1>
    <UiInput value={searchInputValue} handleInputChange={handleInputChange} placeholder={t('searchInputPlaceholder')} classes={styles.search__input}/>
    <SearchList people={people} />
    </>
  )
}

SearchPage.propTypes = {
  setApiError: PropTypes.func,
}

export default withErrorApi(SearchPage);