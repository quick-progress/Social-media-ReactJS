import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {userReducer} from './user-reducer';

let reducers = combineReducers({
  user: userReducer,
  postPage: profileReducer,
  dialogsList: dialogReducer,
});

let store = createStore( reducers );

export default store;