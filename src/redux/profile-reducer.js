import {getNewId, getCurrentDate, getCurrentTime} from './reducersFunctions'

const ADD_POST = 'ADD-POST',
      CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: '564641231', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      postDate: {
        date: '25.12.2020',
        time: '00:00',
      },
    },
    { id: '564641231', 
      text: 'Мой первый пост',
      postDate: {
        date: '22.12.2020',
        time: '00:00'
      },
    },
    { id: '564641231', 
      text: 'Мой первый пост',
      postDate: {
        date: '20.12.2020',
        time: '00:00'
      },
    },
    { id: '345235345', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      postDate: {
        date: '17.12.2020',
        time: '00:00'
      },
    },
    { id: '456745567', 
      text: 'Мой ТРетий пост',
      postDate: {
        date: '16.12.2020',
        time: '00:00'
      },
    },
  ],
  newPostText: '',
}; 

export const profileReducer = (state = initialState, action) => {
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