const UPADTE_USER_INFO = 'UPDATE-USER-INFO',
      CHANGE_USER_PHOTO = 'CHANGE-USER-PHOTO',
      CHANGE_USER_NAME = 'CHANGE-USER-NAME',
      CHANGE_USER_SURNAME = 'CHANGE-USER-SURNAME',
      CHANGE_USER_BIRTHDAY = 'CHANGE-USER-BIRTHDAY',
      CHANGE_USER_LOGIN = 'CHANGE-USER-LOGIN',
      CHANGE_USER_LOCATION = 'CHANGE-USER-LOCATION',
      CHANGE_USER_EMAIL = 'CHANGE-USER-EMAIL';

const initialState = {
  userdata: {
    login: 'george_kpb',
    email: 'test@tester.com',
    photo: 'https://i03.fotocdn.net/s114/2f5ff212bcc7d615/user_l/2577837327.jpg',
    id: '54562123123155645',
    name: 'Георгий',
    surname: 'Кузнецов',
    dateOfBirth: '13.04.1997',
    profileCover: 'https://vk-oblozhki.ru/photos/big/background-color-explosion-sky-abstact-colors-125-211.jpg',
    location: 'Омск',
  },
  editdata: {
    login: '',
    photo:  '',
    name:  '',
    surname: '',
    dateOfBirth: '',
    location: '',
    email: '',
  },
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPADTE_USER_INFO:
      for (let info in state.editdata) {
        if (state.editdata[info] === '') continue;
        state.userdata[info] = state.editdata[info];
      };
      return state;
    case CHANGE_USER_PHOTO:
      state.editdata.photo = action.photo;
      return state;
    case CHANGE_USER_NAME:
      state.editdata.name = action.name;
      return state;
    case CHANGE_USER_SURNAME:
      state.editdata.surname = action.surname;
      return state;
    case CHANGE_USER_BIRTHDAY:
      state.editdata.dateOfBirth = action.birthday;
      return state;
    case CHANGE_USER_LOGIN:
      state.editdata.login = action.login;
      return state;
    case CHANGE_USER_LOCATION:
      state.editdata.location = action.location;
      return state;
    case CHANGE_USER_EMAIL:
      state.editdata.email = action.email;
      return state;
    default: 
      return state;
  };
};

export const updateUserInfoActionCreator = () => ({ type: UPADTE_USER_INFO, });
export const changeUserPhotoActionCreator = (photo) => ({ type: CHANGE_USER_PHOTO, photo: photo});
export const changeUserNameActionCreator = (name) => ({ type: CHANGE_USER_NAME, name: name});
export const changeUserSurnameActionCreator = (surname) => ({ type: CHANGE_USER_SURNAME, surname: surname});
export const changeUserBirthdayActionCreator = (birthday) => ({ type: CHANGE_USER_BIRTHDAY, birthday: birthday});
export const changeUserLoginActionCreator = (login) => ({ type: CHANGE_USER_LOGIN, login: login});
export const changeUserLocationActionCreator = (location) => ({ type: CHANGE_USER_LOCATION, location: location});
export const changeUserEmailActionCreator = (email) => ({ type: CHANGE_USER_EMAIL, email: email});