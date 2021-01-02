const ADD_POST = 'ADD-POST',
      CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

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

    dialogs: [{ id: 'mark123456', 
                name: 'Марк', 
                messages: [
                            { id: '123', message: '1 сообщение Марк', time: '10:50', date: '20.12.2020', condition: 'read'},
                            { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'},
                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'},
                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'}
                          ],
                },
                { id: 'valentin12456', 
                  name: 'Валентин', 
                  messages: [
                              { id: '123', message: '1 сообщение Валентин', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'}
                            ],
                },
                { id: 'pavel12456', 
                  name: 'Павел', 
                  messages: [
                              { id: '123', message: '1 сообщение Павел', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'}
                            ],
                },
                { id: 'Andrey123456', 
                  name: 'Андрей', 
                  messages: [
                              { id: '123', message: '1 сообщение Андрей', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '456', message: '2 сообщение Андрей', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'},
                              { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020', condition: 'read'}
                            ],
                },],
  },
  _observerState(state) {

  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._observerState = observer;
  },

  addPost() {
    if (this._state.postPage.newPostText === '') return;
    let newPost = {
      id: this.getNewId(),
      text: this._state.postPage.newPostText,
      date: '02.01.2021',
    };
    this._state.postPage.posts.unshift(newPost)
    this._observerState(this._state);
  },
  changeNewPostText(newText) {
    this._state.postPage.newPostText = newText;
    this._observerState(this._state);
  },
  getNewId(min = 0, max = 10000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  },

  _getCurrentDate() {
    const today = new Date(),
          day = (today.getDate() < 10)? `0${today.getDate()}`: today.getDate(),
          month = ( (today.getMonth() + 1) < 10)? `0${(today.getMonth() + 1)}`: (today.getMonth() + 1);
    return `${day}.${month}.${today.getFullYear()}`;
  },

  _getCurrentTime() {
    const today = new Date();
    const hours = (today.getHours() < 10)? `0${today.getHours()}`: today.getHours(),
          minutes = (today.getMinutes() < 10)? `0${today.getMinutes()}`: today.getMinutes();
    return `${hours}:${minutes}`;
  },

  dispatch(action) {
    switch(action.type) {
      case ADD_POST: 
        if (this._state.postPage.newPostText === '') return;
        let newPost = {
          id: this.getNewId(),
          text: this._state.postPage.newPostText,
          postDate: {
            date: this._getCurrentDate(),
            time: this._getCurrentTime(),
          },
        };
        this._state.postPage.posts.unshift(newPost)
        this._observerState(this._state);
        break;
      case CHANGE_NEW_POST_TEXT:
        this._state.postPage.newPostText = action.newText;
        this._observerState(this._state);
        break;
      default: 
    };
  },
};
export default store;

export const addPostActionCreator = () => ({ type: ADD_POST, });

export const changeNewPostActionCreator = (text) => ({ type: CHANGE_NEW_POST_TEXT, newText: text, });