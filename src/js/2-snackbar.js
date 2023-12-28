
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');


form.addEventListener('submit', (event) => {

    event.preventDefault(); 
    const delay = document.querySelector('input[name ="delay"]');
    const state = document.querySelector('input[name="state"]:checked');
    const delayValue = delay.value;
    const stateValue = state.value;
  
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
              message: `✅ Fulfilled promise in ${delay}ms`,
              icon: '',
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

});

