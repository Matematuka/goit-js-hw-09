import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),c=document.querySelector("input"),r=document.querySelector("textarea"),u=document.querySelector("button"),m=document.querySelectorAll("label");c.classList.add("mail");r.classList.add("text");u.classList.add("btn");for(let e of m)e.classList.add("label");const o="feedback-form-state";t.addEventListener("input",i);function i(){const e=t.elements.email.value,a=t.elements.message.value,n={email:e,message:a},l=JSON.stringify(n);localStorage.setItem(o,l)}function s(){const e=localStorage.getItem(o);try{return JSON.parse(e)}catch{return e}}function d(){const e=s()||{};t.elements.email.value=e.email||"",t.elements.message.value=e.message||""}d();t.addEventListener("submit",f);function f(e){e.preventDefault();const a=s()||{};console.log(a),localStorage.removeItem(o),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map