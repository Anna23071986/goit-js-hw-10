import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as s}from"./assets/vendor-651d7991.js";const a=document.querySelector(".form"),m=(e,t)=>new Promise((o,i)=>{setTimeout(()=>{t==="fulfilled"?o(s.show({title:"OK",titleColor:"rgba(255, 255, 255, 1)",message:`Fulfilled promise in ${e}ms`,messageColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(89, 161, 13, 1)",image:"../img/bi_check2-circle.svg",imageWidth:24,position:"topRight"})):i(s.show({title:"Error",titleColor:"rgba(255, 255, 255, 1)",message:`Rejected promise in ${e}ms`,messageColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(239, 64, 64, 1)",image:"../img/bi_x-octagon.svg",imageWidth:24,position:"topRight"}))},e)});function n(e){e.preventDefault();const t=e.target,o=t.elements.delay.value,i=t.elements.state.value;m(o,i).then(r=>r).catch(r=>r),t.reset()}a.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
