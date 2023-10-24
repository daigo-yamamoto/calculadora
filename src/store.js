import { createStore } from 'redux';
import calculadoraReducer from './reducers/calculadoraReducer';

const store = createStore(calculadoraReducer);

export default store;
