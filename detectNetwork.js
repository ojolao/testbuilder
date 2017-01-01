// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16 
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  
  var output;
  var firstTwo = cardNumber.substr(0, 2);
  var firstFour = cardNumber.substr(0, 4);

  if ((firstTwo === '38' || firstTwo === '39') && cardNumber.length === 14) {
    output = "Diner's Club";
  } else if ((firstTwo === '34' || firstTwo === '37') && cardNumber.length === 15) {
    output = "American Express";
  } else if ((Number(firstTwo) >= 51 && Number(firstTwo) <= 55) && cardNumber.length === 16){
    output = 'MasterCard';
  } else if ((firstFour === '4903' || firstFour === '4905' || firstFour === '4911' || firstFour === '4936' || firstFour === '6333' || firstFour === '6759' || cardNumber.substr(0, 6) === '564182' || cardNumber.substr(0, 6) === '633110') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    output = 'Switch';
  } else if (cardNumber.charAt(0) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    output = 'Visa';
  } else if ((firstFour === '6011' || (Number(cardNumber.substr(0, 3)) >= 644 && Number(cardNumber.substr(0, 3)) <= 649) || firstTwo === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    output = 'Discover';
  } else if ((firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304') && (cardNumber.length >= 12 && cardNumber.length <= 19)){
    output = 'Maestro';
  } else if (((Number(cardNumber.substr(0, 6)) >= 622126 && Number(cardNumber.substr(0, 6)) <= 622925) || (Number(cardNumber.substr(0, 3)) >= 624 && Number(cardNumber.substr(0, 3)) <= 626) || (Number(firstFour) >= 6282 && Number(firstFour) <= 6288))  && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    output = 'China UnionPay';
  } else {
    output = 'nothing';
  }
  return output;
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



//detectNetwork('')


