import { combineReducers } from 'redux';
import notes from './notes_reducer';

const reducer = combineReducers({
  notes
});

export default reducer;
