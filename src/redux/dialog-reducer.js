import {getNewId, getCurrentDate, getCurrentTime} from './reducersFunctions'

const ADD_MESSAGE = 'ADD-MESSAGE',
      CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT',
      CHANGE_RECIPIENT = 'CHANGE-RECIPIENT';

const initialState = {
  dialogs: [{ id: 'mark123456', 
              name: 'Марк', 
              messages: [
                          { id: '123', message: '1 сообщение Марк', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                          { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                          { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                          { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',}
                        ],
              },
              { id: 'valentin12456', 
                name: 'Валентин', 
                messages: [
                            { id: '123', message: '1 сообщение Валентин', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',}
                          ],
              },
              { id: 'pavel12456', 
                name: 'Павел', 
                messages: [
                            { id: '123', message: '1 сообщение Павел', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',}
                          ],
              },
              { id: 'Andrey123456', 
                name: 'Андрей', 
                messages: [
                            { id: '123', message: '1 сообщение Андрей', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '456', message: '2 сообщение Андрей', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',},
                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read', whose: 'his',}
                          ],
              },],
  newMessageText: {
    recipient: '',
    message: '',
  },
};

export const dialogReducer = (state = initialState, action) => {
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