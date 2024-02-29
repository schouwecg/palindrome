//create variables for the check button, for the inputfield, and for result.

let submitButton = document.getElementById("check-btn");
let inputField = document.getElementById("text-input");
let result = document.getElementById("result");

//create function for cleaning up the string, using regex to get rid of 
//all non-alphanumeric characters 

function schoneInputString(str) {
  const regex = /[_,():;\/.{}+-\s]/g;
  return str.replace(regex, '');
};

//create function for comparing 2 arrays

function arraysAreEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;

    }
  }
  return true;
}

//create some more variables 
const palinCheck = (input) => {
  let cleanInput = schoneInputString(input);
  let casedInput = cleanInput.toLowerCase();
  let arrayedInput = casedInput.split("");
  let reversedArray = arrayedInput.toReversed();
  let smileyElement = document.getElementById("smiley");

  //check if string is a palindrome or not

  if (arraysAreEqual(arrayedInput, reversedArray)) {
    return true;

  } else {
    return false;
  };
};

submitButton.addEventListener("click", () => {
  if (inputField.value == "") {
    alert("Please input a value");
  } else if (palinCheck(inputField.value)) {
    result.innerText = `${inputField.value} is a palindrome`;
    smileyElement.textContent = "😊";
    
    
  } else {
    result.innerText = `${inputField.value} is not a palindrome` 
    smileyElement.textContent = "☹️";
  };
});
