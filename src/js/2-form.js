const form = document.querySelector('.feedback-form');
const input = document.querySelector('.form-input');
const textarea = document.querySelector('.form-textarea');
const button = document.querySelector('form-buttton');
input.classList.add("mail");
textarea.classList.add("text");
button.classList.add("btn");

const localStorageKey = 'feedback-form-state';
form.addEventListener('input', saveToLS);
function saveToLS () {
    const userEmail = form.elements.email.value;
    const userMessage = form.elements.message.value;
    const data = {
        email: userEmail,
        message: userMessage,
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem(localStorageKey, jsonData);
}

function loadFromLS() {
    const loadData = localStorage.getItem(localStorageKey);
    try {
        const result = JSON.parse(loadData);
        return result;
    } catch {
    return loadData;
    }
}
    
function rebootData() {
    const data = loadFromLS(localStorageKey) || {};
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
}
    
rebootData(localStorageKey);

form.addEventListener('submit', pressToButton);
function pressToButton (evt) {
    evt.preventDefault();
    const data = loadFromLS(localStorageKey) || {};
    console.log(data);
    localStorage.removeItem(localStorageKey);
    form.reset();
};


    
    
    
    
    
    
    
    
    
    
    
    
    
    







    
// const localStorageKey = 'feedback-form-state';
// const localFormData = JSON.parse(localStorage.getItem(localStorageKey));

// if (localFormData !== null && localFormData !== undefined) {
//   refs.input.value = localFormData.email;
//   refs.textarea.value = localFormData.message;
// }

// refs.form.addEventListener('input', e => {
//   const formData = {
//     email: refs.input.value.trim(),
//     message: refs.textarea.value.trim(),
//   };

//   localStorage.setItem(localStorageKey, JSON.stringify(formData));
// });

// refs.form.addEventListener('submit', event => {
//   event.preventDefault();
//   const elements = event.target.elements;
//   const formData = {
//     email: elements.email.value.trim(),
//     message: elements.message.value.trim(),
//   };

//   if (
//     event.target.elements.email.value.trim() !== '' &&
//     event.target.elements.message.value.trim() !== ''
//   ) {
//     console.log(formData);
//     localStorage.removeItem(localStorageKey);
//     refs.form.reset();
//   }
// });