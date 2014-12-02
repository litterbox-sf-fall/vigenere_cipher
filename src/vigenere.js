var vigenere = {};
var helper = {};

vigenere.encode = function(message, keyword) {
  var alphabet = helper.alphabet();
  var customKey = helper.keywordResize(message, keyword);
  var splitMsg = message.split("");

  var encodedLetters = splitMsg.map(function(element, index){
    // finds the index of the encoded letter
    var msgLetterPosition = alphabet.indexOf(element);
    var keywordLetterPosition = alphabet.indexOf(customKey[index]);
    var encodedLetterPosition = msgLetterPosition + keywordLetterPosition;
    if(encodedLetterPosition > alphabet.length){ encodedLetterPosition -= alphabet.length; };
    // returns the encoded letter
    return alphabet[encodedLetterPosition];
    // joins the array of encoded letters back together
  })

  return encodedLetters.join("");

}

vigenere.decode = function(message, keyword) {
  var alphabet = helper.alphabet();
  var customKey = helper.keywordResize(message, keyword);
  var splitMsg = message.split("");

  var decodedLetters = splitMsg.map(function(element, index){
    var letterIndex = alphabet.indexOf(element) - alphabet.indexOf(customKey[index]);
    if(letterIndex < 0){
      letterIndex += alphabet.length;
    };
    return alphabet[letterIndex];
  });
  return decodedLetters.join("");
}

//Adjusts the side of the keyword to match the size of the message
helper.keywordResize = function(message, keyword) {
  var result = "";
  var splitMsg = keyword.split("");
  for (var i = 0; i < message.length; i++ ) {
    var position = i % keyword.length;
    result += splitMsg[position];
  }
  return result;
}

// Returns the alphabet as an array
helper.alphabet = function(){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("")
  return alphabet;
}