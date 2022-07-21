import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const onClose = selectedDates => {
  console.log(selectedDates[0]);
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

const flackpicr = flatpickr('#datetime-picker', options);
