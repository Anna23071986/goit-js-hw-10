import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const makePromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(
          iziToast.show({
            title: 'OK',
            titleColor: 'rgba(255, 255, 255, 1)',
            message: `Fulfilled promise in ${delay}ms`,
            messageColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(89, 161, 13, 1)',
            iconUrl: '../img/bi_check2-circle.svg',
            position: 'topRight',
          })
        );
      } else {
        reject(
          iziToast.show({
            title: 'Error',
            titleColor: 'rgba(255, 255, 255, 1)',
            message: `Rejected promise in ${delay}ms`,
            messageColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(239, 64, 64, 1)',
            iconUrl: '../img/bi_x-octagon.svg',
            position: 'topRight',
          })
        );
      }
    }, delay);
  });
};

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  makePromise(delay, state)
    .then(value => value)
    .catch(error => error);

  form.reset();
}

form.addEventListener('submit', handleSubmit);
