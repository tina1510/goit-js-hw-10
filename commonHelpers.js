import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as b,i as C}from"./assets/vendor-651d7991.js";const S=document.querySelector("#datetime-picker"),n=document.querySelector("button"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");n.setAttribute("disabled","true");const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0].getTime()<=new Date().getTime()?(C.error({message:"Please choose a date in the future"}),n.setAttribute("disabled",!0)):n.removeAttribute("disabled")}},x=b(S,p);n.addEventListener("click",()=>{const t=x.selectedDates[0],u=setInterval(d,1e3,t);function d(i){const l=new Date().getTime(),e=i.getTime()-l;if(e<=0){clearInterval(u),m.textContent="00",f.textContent="00",h.textContent="00",y.textContent="00";return}const{days:s,hours:a,minutes:c,seconds:g}=r(e);m.textContent=o(s),f.textContent=o(a),h.textContent=o(c),y.textContent=o(g)}});function r(t){const e=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),a=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:s,minutes:a,seconds:c}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map