export const HTTPS = 'https://';

//swapi
export const SWAPI_BASE_URL = 'swapi.py4e.com/api/';
export const SWAPI_PEOPLE = 'people';
// export const SWAPI_RERSON = 'person';
export const SWAPI_PARAM_PAGE = '/?page='
export const SWAPI_PARAM_SEARCH = '/?search='
export const PEOPLE_LIST = HTTPS+SWAPI_BASE_URL+SWAPI_PEOPLE+SWAPI_PARAM_PAGE;
export const PERSON_DATA = HTTPS+SWAPI_BASE_URL+SWAPI_PEOPLE;
export const PERSON_SEARCH = HTTPS+SWAPI_BASE_URL+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;

//visualguide
const GUIDE_IMG = 'starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';
export const URL_IMG_PERSON = HTTPS+GUIDE_IMG+GUIDE_PEOPLE
// https://starwars-visualguide.com/assets/img/characters/1.jpg