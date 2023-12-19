import {createStore} from 'redux'; 
import reducers from '../Redux/reducers/index';

const store = createStore(reducers, {});

export default store;