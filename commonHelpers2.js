import{e as a}from"./assets/bi_x-octagon-e543ac9d.js";import{i}from"./assets/vendor-651d7991.js";const n="/goit-js-hw-10/assets/bi_check2-circle-edaedad4.svg",l=document.querySelector(".form"),c=(e,o)=>new Promise((t,r)=>{setTimeout(()=>{o==="fulfilled"?t(e):r(e)},e)});function m(e){e.preventDefault();const o=e.target,t=o.elements.delay.value,r=o.elements.state.value;c(t,r).then(s=>{i.show({title:"OK",titleColor:"rgba(255, 255, 255, 1)",message:`Fulfilled promise in ${s}ms`,messageColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(89, 161, 13, 1)",iconUrl:n,position:"topRight"})}).catch(s=>i.show({title:"Error",titleColor:"rgba(255, 255, 255, 1)",message:`Rejected promise in ${s}ms`,messageColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(239, 64, 64, 1)",iconUrl:a,position:"topRight"})),o.reset()}l.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
