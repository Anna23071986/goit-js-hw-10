import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/bi_x-octagon.svg';

const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timeElements = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let userSelectedDate;
let ms;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate >= new Date()) {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
      clearInterval(timerId);
    } else {
      startBtn.disabled = true;
      iziToast.show({
        title: 'Error',
        titleColor: 'rgba(255, 255, 255, 1)',
        message: 'Please choose a date in the future',
        backgroundColor: 'rgba(239, 64, 64, 1)',
        iconUrl: errorIcon,
        position: 'topRight',
        messageColor: 'rgba(255, 255, 255, 1)',
      });
    }
  },
};

flatpickr(myInput, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateDisplay(obj) {
  Object.keys(obj).forEach(key => {
    timeElements[key].textContent = addLeadingZero(obj[key]);
  });
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    ms = userSelectedDate.getTime() - Date.now();
    const obj = convertMs(ms);

    updateDisplay(obj);

    if (Object.values(obj).every(value => value === 0)) {
      clearInterval(timerId);
    }
  }, 1000);

  startBtn.disabled = true;
});
