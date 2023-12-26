
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');


form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault(); 

  const delayValue = parseInt(form.elements['delay'].value);

  const stateValue = form.elements['state'].value;

  const promise = new Promise((resolve, reject) => {
    if (stateValue === 'fulfilled') {
    
      setTimeout(() => {
        resolve(delayValue);
      }, delayValue);
    } else {
      setTimeout(() => {
        reject(delayValue);
      }, delayValue);
    }
  });

  promise
    .then((delay) => {

        iziToast.success({
            message: ` Fulfilled promise in ${delay}ms`,
            position: 'topRight',
        });
    })
    .catch((delay) => {

        iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,
            icon: '',
            position: 'topRight',
        });

        });
}