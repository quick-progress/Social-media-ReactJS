export function observerState(state) {

};

export function subscriber(observer) {
  observerState = observer;
};

export function getNewId(min = 0, max = 10000000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};

export function getCurrentDate() {
  const today = new Date(),
        day = (today.getDate() < 10)? `0${today.getDate()}`: today.getDate(),
        month = ( (today.getMonth() + 1) < 10)? `0${(today.getMonth() + 1)}`: (today.getMonth() + 1);
  return `${day}.${month}.${today.getFullYear()}`;
};

export function getCurrentTime() {
  const today = new Date();
  const hours = (today.getHours() < 10)? `0${today.getHours()}`: today.getHours(),
        minutes = (today.getMinutes() < 10)? `0${today.getMinutes()}`: today.getMinutes();
  return `${hours}:${minutes}`;
};