
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import izitoast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");


button.disabled = true;;
let userSelectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
if (selectedDates[0].getTime() <= new Date().getTime()){
    izitoast.error({  
        message: 'Please choose a date in the future',
    });
    button.disabled = true;;

}
else {
    button.disabled = false;
    userSelectedDate = selectedDates[0];
};

    },
  };

flatpickr(input, options);

button.addEventListener("click", () => {
   const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = userSelectedDate.getTime() - now;

    if (difference <= 0) {
        clearInterval(timerInterval); 
        dataDays.textContent = "00";
        dataHours.textContent = "00";
        dataMinutes.textContent = "00";
        dataSeconds.textContent = "00";
        return;
      }
      const { days, hours, minutes, seconds } = convertMs(difference);


      dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);

   }, 1000 );

   
});


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
