import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l=document.querySelector("button");l.classList.add("btn");const o="feedback-form-state";t.addEventListener("input",c);function c(){const e=t.elements.email.value.trim(),a=t.elements.message.value.trim(),n={email:e,message:a},r=JSON.stringify(n);localStorage.setItem(o,r)}function s(){const e=localStorage.getItem(o);try{return JSON.parse(e)}catch{return e}}function m(){const e=s()||{};t.elements.email.value=e.email||"",t.elements.message.value=e.message||""}m();t.addEventListener("submit",u);function u(e){e.preventDefault();const a=s()||{};console.log(a),localStorage.removeItem(o),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map