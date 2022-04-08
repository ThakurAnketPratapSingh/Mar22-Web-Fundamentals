var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
console.log("Its a vowel");
alert("Its a vowel");
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
  console.log("Its a consonant");
  alert("Its a consonant");
} else {
    console.log("Invalid input please enter an alphabet");
    alert("Invalid input please enter an alphabet");
 }
