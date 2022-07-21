const bodyEl = document.querySelector('body');

const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

btnStopEl.setAttribute('disabled', '');

//let isActive = false;
let intervalId = null;

const changeBodyColor = () =>
  bodyEl.setAttribute('style', `background-color : ${getRandomHexColor()}`);

const startSwitcher = () => {
  //  isActive = true;
  btnStartEl.setAttribute('disabled', '');
  btnStopEl.removeAttribute('disabled');
  intervalId = setInterval(changeBodyColor, 1000);
};

const stopSwitcher = () => {
  clearInterval(intervalId);
  btnStartEl.removeAttribute('disabled');
  btnStopEl.setAttribute('disabled', '');
};

btnStartEl.addEventListener('click', startSwitcher);
btnStopEl.addEventListener('click', stopSwitcher);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
