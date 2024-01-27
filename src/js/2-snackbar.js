import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/bi_x-octagon.svg';
import resolveIcon from '../img/bi_check2-circle.svg';

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
            iconUrl: resolveIcon,
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
            iconUrl: errorIcon,
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
