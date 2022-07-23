import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

let firstDelay = 0;
let stepDelay = 0;
let amountPromises = 0;

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  firstDelay = Number(delay.value);
  stepDelay = Number(step.value);
  amountPromises = Number(amount.value);
  getResult(firstDelay, stepDelay, amountPromises);
  //  console.log(firstDelay, stepDelay, amountPromises);
}

function getResult(firstDelay, stepDelay, amountPromises) {
  for (let i = 0; i < amountPromises; i += 1) {
    createPromise(i + 1, firstDelay + stepDelay * i)
      .then(onSuccsess)
      .catch(onFailure);
  }
}

function onSuccsess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onFailure({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
