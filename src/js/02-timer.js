import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let selecteddDate = null;

const onClose = selectedDates => {
  selecteddDate = selectedDates[0];
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

const btnStartEl = document.querySelector('[data-start]');

const onStart = () => {
  const curentDate = new Date();
  console.log(curentDate < selecteddDate);
};

const flackpicr = flatpickr('#datetime-picker', options);
btnStartEl.addEventListener('click', onStart);
