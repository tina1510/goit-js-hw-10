import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-651d7991.js";const r=document.querySelector(".form");r.addEventListener("submit",s=>{s.preventDefault();const i=document.querySelector('input[name ="delay"]'),n=document.querySelector('input[name="state"]:checked'),t=i.value,c=n.value;new Promise((e,m)=>{setTimeout(c==="fulfilled"?()=>{e(t)}:()=>{m(t)},t)}).then(e=>{o.success({message:`✅ Fulfilled promise in ${e}ms`,icon:"",position:"topRight"})}).catch(e=>{o.error({message:`❌ Rejected promise in ${e}ms`,icon:"",position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map