//Функция для проверки длины строки

const lengthString = (string, Maxlength) => string.length <= Maxlength;

/**
 * function lengthString (string, Maxlength) {
 *if (string.length <= Maxlength) {
 *return true;
 *}
 * return false;
 * }
 */

//Функция для проверки, является ли строка палиндромом

const findPalendrom = (string) => {
  const formattedinString = string.replaceAll(' ','').toUpperCase();
  let reverseString = '';
  for (let i = formattedinString.length - 1; i >= 0; i--) {
    reverseString += formattedinString[i];
  }
  return formattedinString === reverseString;
};

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const extractNumber = (string) => {
  string = string.toString();
  const example = '0123456789';
  let numbers = '';
  for (let i = 0; i <= string.length; i++) {
    if (example.includes(string[i]) === true) {
      numbers += string[i];
    }
  }
  if (numbers.length > 0) {
    for (let i = 0; i <= numbers.length; i++) {
      if (numbers[i] > 0) {
        return numbers.slice(i);
      }
    }
  } else {
    return NaN;
  }
};

lengthString();
findPalendrom();
extractNumber();
