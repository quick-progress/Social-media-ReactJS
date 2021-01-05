import {getNewId, getCurrentDate, getCurrentTime} from './reducersFunctions'

const ADD_MESSAGE = 'ADD-MESSAGE',
      CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT',
      CHANGE_RECIPIENT = 'CHANGE-RECIPIENT';

export const dialogReducer = (state, action) => {
  switch(action.type) {
    case ADD_MESSAGE: 
      let newMessageText= state.newMessageText.message;
      if (newMessageText === '' || newMessageText === undefined || newMessageText === ' ') return;
      let newMessageBody = {
        id: getNewId(),
        message: state.newMessageText.message,
        date: getCurrentDate(),
        time: getCurrentTime(),
        condition: 'unread',
        whose: 'my',
      };
      for (let i = 0, sdl = state.dialogs.length; i < sdl; i++) {
        if ( state.newMessageText.recipient !== state.dialogs[i].id ) continue;
        state.dialogs[i].messages.push(newMessageBody);
      };
      return state;
    case CHANGE_NEW_MESSAGE_TEXT:
      state.newMessageText.message = action.newText;
      return state;
    case CHANGE_RECIPIENT:
      state.newMessageText.recipient = action.recipient;
      return state;
    default: 
      return state;
  };
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, });

export const changeNewMessageActionCreator = (text) => ({ type: CHANGE_NEW_MESSAGE_TEXT, newText: text, });

export const changeRecipientActionCreator = (recipientID) => ({ type: CHANGE_RECIPIENT, recipient: recipientID, });