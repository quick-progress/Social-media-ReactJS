

const state = {
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
        date: '19.12.2020',
      },
      { id: '564641231', 
        text: 'Мой первый пост',
        date: '17.12.2020',
      },
      { id: '564641231', 
        text: 'Мой первый пост',
        date: '17.12.2020',
      },
      { id: '345235345', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus porro tempore. Cumque, quasi aliquid pariatur rem delectus dolorem, quisquam possimus exercitationem blanditiis, eveniet optio. Similique dolores perspiciatis veniam velit.',
        date: '14.12.2020',
      },
      { id: '456745567', 
        text: 'Мой ТРетий пост',
        date: '13.12.2020',
      },
    ],
    newPostText: '',
  },

  dialogs: [{ id: 'mark123456', name: 'Марк', messages: [
                                                            { id: '123', message: '1 сообщение Марк', time: '10:50', date: '20.12.2020'},
                                                            { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020'},
                                                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020'},
                                                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020'}
                                                          ],
              },
              { id: 'valentin12456', name: 'Валентин', messages: [
                                                            { id: '123', message: '1 сообщение Валентин', time: '10:50', date: '20.12.2020'},
                                                            { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020'},
                                                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020'},
                                                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020'}
                                                          ],
              },
              { id: 'pavel12456', name: 'Павел', messages: [
                                                            { id: '123', message: '1 сообщение Павел', time: '10:50', date: '20.12.2020'},
                                                            { id: '456', message: '2 сообщение', time: '10:50', date: '20.12.2020'},
                                                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020'},
                                                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020'}
                                                          ],
              },
              { id: 'Andrey123456', name: 'Андрей', messages: [
                                                            { id: '123', message: '1 сообщение Андрей', time: '10:50', date: '20.12.2020' },
                                                            { id: '456', message: '2 сообщение Андрей', time: '10:50', date: '20.12.2020' },
                                                            { id: '789', message: '3 сообщение', time: '10:50', date: '20.12.2020' },
                                                            { id: '987', message: '4 сообщение', time: '10:50', date: '20.12.2020' }
                                                          ],
              },],
};
export default state;

let observerState = (state) => {

}

export  let subscribe = (observer) => {
  observerState = observer;
};

export let addPost = () => { 
  if (state.postPage.newPostText === '') return;
  let newPost = {
    id: getNewId(),
    text: state.postPage.newPostText,
    date: '19.12.2020',
  };
  state.postPage.posts.unshift(newPost)
  observerState(state);//renderDOMTree(state);
};

export const changeNewPostText = newText => {
  state.postPage.newPostText = newText;
  observerState(state);//renderDOMTree(state);
}; 

function getNewId(min = 0, max = 10000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};


