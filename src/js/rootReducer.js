import { combineReducers } from 'redux';
import translationReducer from 'components/Translation/reducer';

export const rootReducer = combineReducers({
  translation: translationReducer,
});
