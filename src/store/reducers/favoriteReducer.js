import { omit } from 'lodash';
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@store/constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      const {id, name, imgUrl} = action.payload;
      const newState1 = {
        ...state,
        [id]: { name, imgUrl }
      };
      return newState1;
    case REMOVE_PERSON_FROM_FAVORITE:
      const newState2 = omit(state, [action.payload])
      return newState2;
    default:
      return state;

  }
}

export default favoriteReducer;