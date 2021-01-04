import state from 'state';
import {observerState, getNewId, getCurrentDate, getCurrentTime} from './bundle'

const ADD_POST = 'ADD-POST',
      CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const profileReducer = (state = state.postPage, action) => {
  switch(action.type) {
    case ADD_POST: 
      addPost();
      break;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      //observerState(state);
      break;
    default: 
  };
  return state;
};

function addPost() {
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
  //observerState(state);
};

export const addPostActionCreator = () => ({ type: ADD_POST, });

export const changeNewPostActionCreator = (text) => ({ type: CHANGE_NEW_POST_TEXT, newText: text, });