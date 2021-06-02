// HTML Setup
// Grab the DOM elements (the input box and the button) in JS
// Add an event listener to the button
// Get access to user's input
// Display the result to the user


const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const middleSection = document.getElementById('middle-section');
const colorField = document.getElementById('color-field');
const topSection = document.getElementById('top-section')

submitBtn.addEventListener('click', ()=>{
    // console.log(inputField.value);
    // console.log(middleSection.textContent);
    // console.log(colorField.value);
    topSection.style.backgroundColor = colorField.value;
    middleSection.textContent = inputField.value;
})