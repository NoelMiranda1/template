import {legacy_createStore as createStore} from 'redux';
import rootReducer from '../store/reducers/root.reducer';
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
