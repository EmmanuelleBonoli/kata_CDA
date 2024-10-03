//Encrypter la phrase passée en paramètre de façon à ce que chaque caractère soit remplacé par son équivalent décalé de 3 lettres :

// Ex. 'A' devient 'D', 'z' devient 'c'

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const punchLine1 = "Je suis ceasar X Y Z";

function CryptMeCaesar(punchLine) {
  const punchArray = punchLine.split("");
  let shiftedArray = [];

  for (let i = 0; i < punchArray.length; i++) {
    const letter = punchArray[i].toLowerCase();

    let isUpper = false;

    // convert into ASCII value
    const letterNoLowerCase = punchArray[i].charCodeAt(0);

    65 <= letterNoLowerCase && letterNoLowerCase <= 90 && (isUpper = true);

    if (letter !== " ") {
      const index = alphabet.indexOf(letter);

      const indexShift = index + 3;

      let newLetter = alphabet[indexShift % 26];

      isUpper
        ? shiftedArray.push(newLetter.toUpperCase())
        : shiftedArray.push(newLetter); // mise en MAJUSCULE
    } else {
      shiftedArray.push(" ");
    }
  }
  shiftedArray = shiftedArray.join("");
  console.log(shiftedArray);
  console.log("VICTORYYYY IS OURSSSS !!!! :D");
}

CryptMeCaesar(punchLine1);
