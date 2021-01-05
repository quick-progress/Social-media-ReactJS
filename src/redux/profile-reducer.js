import {getNewId, getCurrentDate, getCurrentTime} from './reducersFunctions'

const ADD_POST = 'ADD-POST',
      CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST: 
      if (state.newPostText === '') return;
      let newPost = {
        id: getNewId(),
        text: state.newPostText,
        postDate: {
          date: getCurrentDate(),
          time: getCurrentTime(),
        },
      };
      state.posts.unshift(newPost)
      return state;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: 
      return state;
  };
};

export const addPostActionCreator = () => ({ type: ADD_POST, });

export const changeNewPostActionCreator = (text) => ({ type: CHANGE_NEW_POST_TEXT, newText: text, });