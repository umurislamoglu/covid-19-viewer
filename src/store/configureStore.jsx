
import { createStore  , compose , applyMiddleware , combineReducers} from 'redux';
import covidReducer from '../reducers/covidReducer'

import thunk from "redux-thunk"
import compareReducer from './../reducers/compareReducer';
import totalDataReducer from './../reducers/totalDataReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function ConfigureStore()  {
    
    const store = createStore(
        combineReducers({countries : covidReducer, compareCountries : compareReducer , totalDatas : totalDataReducer}),composeEnhancers(applyMiddleware(thunk)) );
    
    return store;
}
