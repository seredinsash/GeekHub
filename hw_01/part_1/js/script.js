//NUMBERS

alert(Math.PI.toFixed(2)); //"3.14"

var num = 0.6 + 0.7;
if (num == 1.3) {
  alert('Вираз "0,6 + 0,7" дорівнює значенню 1,3');
} else {
  alert('Вираз "0,6 + 0,7" не дорівнює значенню 1,3');
}

var num = 0.6 + 0.7;
alert(num.toFixed(1));

alert(parseInt("100$"));

//STRINGS

var str = "some test string";
alert('"' + str[0] + '"' + " and " + '"' + str[str.length - 1] + '"');

var str = "some test string";
alert(
  str.slice(0, 1).toUpperCase() +
    str.slice(1, str.length - 1) +
    str.slice(str.length - 1).toUpperCase()
);

var str = "some test string";
alert(str.indexOf(" ")); // перший пробіл - 4
alert(str.indexOf(" ", "5")); // другий пробіл, відраховуючи від 5 символу - 9

var str = "some test string";
alert(str.slice(0, str.length - 6));

//CHALLENGE

var entranceNumber = prompt("Enter the apartment number");
if (entranceNumber >= 1 && entranceNumber <= 20) {
  alert("You choosed entrance № 1");
}
if (entranceNumber >= 21 && entranceNumber <= 40) {
  alert("You choosed entrance № 2");
}
if (entranceNumber >= 41 && entranceNumber <= 60) {
  alert("You choosed entrance № 3");
}
if (entranceNumber >= 61) {
  alert("You selected the wrong apartment number");
}
