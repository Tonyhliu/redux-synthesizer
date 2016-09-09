import { createStore } from 'redux';
import reducer from '../reducers/index';

const configureStore = () => (
  createStore(reducer)
);

export default configureStore;
