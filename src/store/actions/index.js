import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@store/constants/actionTypes';


export const addPersonToFavorite = (payload) => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload
})

export const removePersonFromFavorite = (...payload) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload
})