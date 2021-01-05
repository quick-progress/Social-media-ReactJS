//import {getNewId, getCurrentDate, getCurrentTime} from './reducersFunctions'

/*const ADD_POST = 'ADD-POST',
      CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';*/

const initialState = {
  login: 'george_kpb',
  photo: 'https://i03.fotocdn.net/s114/2f5ff212bcc7d615/user_l/2577837327.jpg',
  id: '54562123123155645',
  name: 'Георгий',
  surname: 'Кузнецов',
  dateOfBirth: '13.04.1997',
  profileCover: 'https://vk-oblozhki.ru/photos/big/background-color-explosion-sky-abstact-colors-125-211.jpg',
  location: 'Омск',
};

export const userReducer = (state = initialState, action) => {
  return state;
};

//export const addPostActionCreator = () => ({ type: ADD_POST, });