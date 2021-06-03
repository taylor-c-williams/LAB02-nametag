// HTML Setup
// Grab the DOM elements (the input box and the button) in JS
// Add an event listener to the button
// Get access to user's input
// Display the result to the user


const submitBtn = document.getElementById('submit-btn');
const pronounInputField = document.getElementById('pronoun-input-field')
const nameInputField = document.getElementById('name-input-field');
const colorField = document.getElementById('color-field');
const nameSection = document.getElementById('name-section');
const topSection = document.getElementById('top-section')
const bottomSection = document.getElementById('bottom-section')
const pronounSection = document.getElementById('pronoun-section')

submitBtn.addEventListener('click', ()=>{
    bottomSection.style.backgroundColor = colorField.value;
    topSection.style.backgroundColor = colorField.value;
    nameSection.textContent = nameInputField.value;
    pronounSection.textContent = pronounInputField.value;
   
    
});

