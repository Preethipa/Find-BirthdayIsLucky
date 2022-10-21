const dateOfBirth = document.querySelector("#date-of-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkBotton = document.querySelector("#check-button");
const textOutput = document.querySelector("#text-output");


function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    textOutput.value = "Your Birthday is lucky!😇";
  } else {
    textOutput.value = "Your Birthday is not lucky!😏";
  }
}

function checkBirthDayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value)
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}


checkBotton.addEventListener('click', checkBirthDayIsLucky);

