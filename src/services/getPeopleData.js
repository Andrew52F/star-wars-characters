import { SWAPI_PEOPLE, HTTPS, SWAPI_BASE_URL, URL_IMG_PERSON, GUIDE_IMG_EXTENSION, PEOPLE_LIST } from '@constants/api'

export const getId = (url, category) => url.replace(HTTPS+SWAPI_BASE_URL+category, '').replace(/\//g, '');

export const getPersonId = (url) => getId(url, SWAPI_PEOPLE)
export const getPersonImgUrl = (id) => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;

export const getPeoplePageId = (url) => {
  const startPos = url.lastIndexOf(PEOPLE_LIST);
  const id = url.slice(startPos+PEOPLE_LIST.length, url.length);
  return Number(id);
} 