//NUMBERS

Math.PI.toFixed(2); //"3.14"

let numRound = 0.6 + 0.7;
numRound === 1.3; // false

+numRound.toFixed(1);

parseInt("100$");

//STRINGS

let str = "some test string";
str =
  str[0].toUpperCase() +
  str.slice(1, str.length - 1) +
  str[str.length - 1].toUpperCase(); // Some test strinG

// OR

str =
  str.slice(0, 1).toUpperCase() +
  str.slice(1, str.length - 1) +
  str.slice(str.length - 1).toUpperCase(); // Some test strinG

str = str.slice(0, str.length - 6); // 'Some test '

str.indexOf(" ", str.indexOf(" ") + 1); // this solution doesn't work if we want to find position of 3rd " "

/* function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}
getPosition(str, " ", 2); // SOLUTION #2 I've found in the internet */

//CHALLENGE

function getNumber(apartmentNumber) {
  if (
    Number.isInteger(apartmentNumber) &&
    apartmentNumber >= 1 &&
    apartmentNumber <= 60
  ) {
    if (apartmentNumber >= 1 && apartmentNumber <= 20) {
      return "You choosed entrance № 1";
    }
    if (apartmentNumber >= 21 && apartmentNumber <= 40) {
      return "You choosed entrance № 2";
    }
    if (apartmentNumber >= 41 && apartmentNumber <= 60) {
      return "You choosed entrance № 3";
    }
  } else {
    return "Enter correct number from 1 to 60";
  }
}

let apartmentNumber = +prompt("Enter the apartment number");
getNumber(apartmentNumber);
