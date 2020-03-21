function changeVocals(str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      res += "b";
    } else if (str[i] == "i") {
      res += "j";
    } else if (str[i] == "u") {
      res += "v";
    } else if (str[i] == "e") {
      res += "f";
    } else if (str[i] == "o") {
      res += "p";
    } else if (str[i] == "A") {
      res += "B";
    } else if (str[i] == "I") {
      res += "J";
    } else if (str[i] == "U") {
      res += "V";
    } else if (str[i] == "E") {
      res += "F";
    } else if (str[i] == "O") {
      res += "P";
    } else {
      res += str[i];
    }
  }
  str = res;
  return str;
}

function reverseWord(str) {
  var res = "";
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  str = res;
  return str;
}

function setLowerUpperCase(str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      res += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      res += str[i].toUpperCase();
    }
  }
  str = res;
  return str;
}

function removeSpaces(str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      res += str[i];
    }
  }
  str = res;
  return str;
}

function passwordGenerator(name) {
  if (name.length >= 5) {
    var satu = changeVocals(name);
    var kedua = reverseWord(satu);
    var ketiga = setLowerUpperCase(kedua);
    var keempat = removeSpaces(ketiga);
  } else {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  return keempat;
}

// console.log(removeSpaces("Sergei Dragunov"));

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
