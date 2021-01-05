import {dialogReducer} from './dialog-reducer';
import {profileReducer} from './profile-reducer';

const store = {
  _state: {
    user: {
      login: 'george_kpb',
      photo: 'https://i03.fotocdn.net/s114/2f5ff212bcc7d615/user_l/2577837327.jpg',
      id: '54562123123155645',
      name: 'Георгий',
      surname: 'Кузнецов',
      dateOfBirth: '13.04.1997',
      profileCover: 'https://vk-oblozhki.ru/photos/big/background-color-explosion-sky-abstact-colors-125-211.jpg',
      location: 'Омск',
    },

    postPage: {
      posts: [
        { id: '564641231', 
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus porro tempore. Cumque, quasi aliquid pariatur rem delectus dolorem, quisquam possimus exercitationem blanditiis, eveniet optio. Similique dolores perspiciatis veniam velit.',
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
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus porro tempore. Cumque, quasi aliquid pariatur rem delectus dolorem, quisquam possimus exercitationem blanditiis, eveniet optio. Similique dolores perspiciatis veniam velit.',
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
    },

    dialogsList: {
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
    },
  },
  
  _observerState(state) {

  },
  getState() {
    return this._state;
  },
  
  subscribe(observer) {
    this._observerState = observer;
  },
  
  dispatch(action) {
    this._state.dialogList = dialogReducer(this._state.dialogsList, action);
    this._state.postPage = profileReducer(this._state.postPage, action);
    this._observerState(this._state);
  },
};

export default store;
