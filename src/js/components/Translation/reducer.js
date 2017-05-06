import { SET_LANGUAGE } from 'constants/generalConstants';

// Initial state
export const initialState = {
  locale: 'en_US', // default locale
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, locale: action.locale };
    default:
      return state;
  }
}
