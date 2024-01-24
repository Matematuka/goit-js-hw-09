const form = document.querySelector(".feedback-form");
const button = document.querySelector("button");
button.classList.add("btn");


const localStorageKey = 'feedback-form-state';
form.addEventListener('input', saveToLS);
function saveToLS () {
    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.message.value.trim();
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