/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(arrayOfNumbers) {
  let result = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
      result += arrayOfNumbers[i];
    }
  }

  return result;
}

console.log(sumOfEvenNumbers(numbers));

/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

function maxNumber(arrayOfNumbers) {
  let result = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > result) {
      result = arrayOfNumbers[i];
    }
  }
  return result;
}

console.log(maxNumber(numbers2));
