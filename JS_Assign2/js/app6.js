const removeRef = document.getElementById('para1');
removeRef.remove(); //To remove text from para1-ID of p-tag

// Get a reference to the HTML element with ID 'wrapperDiv'
const wrapperRef = document.getElementById('wrapperDiv');

// Get references to two button elements by their IDs
const button = document.getElementById('btn1');
const button1 = document.getElementById('btn2');

// Add a click event listener to the first button (btn1)
button.addEventListener('click', () => {
  // Get the value entered in the input field with ID 'age'
  let age = document.getElementById('age').value;
  // Clear any existing text or content inside the wrapperDiv
  wrapperRef.innerText = ``;

  // Check if the entered age is less than 10
  if (age < 10) {
    // Create a new <p> element
    let para2 = document.createElement('p');

    // Set its text content to "You are too young"
    para2.innerText = 'You are too young';

    // Add a CSS class named 'remove' to this <p> element
    // (helps identify which elements can be removed later)
    para2.classList.add('remove');

    // Append the <p> element as a child of wrapperDiv
    wrapperRef.appendChild(para2);
  }
  else {
    // If age is 10 or older, create another <p> element
    let para2 = document.createElement('p');

    // Set its text to indicate the user is old enough
    para2.innerText = 'You are old enough to try';

    // Add the same 'remove' class so it can be deleted later
    para2.classList.add('remove');

    // Append this <p> element to the wrapperDiv
    wrapperRef.appendChild(para2);
  }
});

// Add a click event listener to the second button (btn2)
button1.addEventListener('click', () => {
  // Select all elements with the class 'remove'
  let removeElements = document.getElementsByClassName('remove');

  // Convert the HTMLCollection into an array using the spread operator [...]
  // Then loop through each element and remove it from the DOM
  [...removeElements].forEach(el => el.remove());

  // (This could also be done using a traditional for loop)
});
