// Завдання №1
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let digit1 = prompt("Write first digit");
// let digit2 = prompt("Write second digit");
// let summ = 0;

// for (let i = +digit1; i <= +digit2; i++) {
//   summ += i;
// }

// document.write(`Task# 1 (sum of digits) ${summ}`);

// // Завдання №2
// Запросить 2 числа и найти только наибольший общий делитель.

// let A = prompt("Write first digit");
// let B = prompt("Write second digit");

// let T = true;
// let i = 0;

// do {
//   let F = 0;
//   let G = 0;
//   let q = 0;

//   if (i < 30) {
//     i++;
//     F = A % i;
//     G = B % i;
//   }

//   if (F == 0 && G == 0) {
//     q++;
//     document.write(`Це є ${q}-й Ділитель --> ${i} `);
//   }

//   if (q > 0) {
//     T = false;
//   }
// } while (i < 30);

// if (T) {
//   document.write(` Task# 2 (не ділиться) `);
// }

// Завдання №3
// Запросить у пользователя число и вывести все делители этого числа.

// let digitFromUser = prompt("Write digit");
// let variable = 0;
// let numbering = 0;

// do {
//   let F = 0;

//   variable++;
//   F = digitFromUser % variable;

//   if (F == 0) {
//     numbering++;
//     document.write(`Це є ${numbering}-й Ділитель --> ${variable} `);
//   }
// } while (variable < 50);

// Завдання №4
// Определить количество цифр в введенном числе.

// let samDigit = prompt("Введіть число");

// if (0 <= samDigit && samDigit <= 9) {
//   document.write(`Ви ввели одне число.`);
// }

// if (10 <= samDigit && samDigit <= 99) {
//   document.write(`Ви ввели два числа.`);
// }

// if (100 <= samDigit && samDigit <= 999) {
//   document.write(`Ви ввели три числа.`);
// }

// if (1000 <= samDigit && samDigit <= 9999) {
//   document.write(`Ви ввели чотири числа.`);
// }
// if (10000 <= samDigit && samDigit <= 99999) {
//   document.write(`Ви ввели п"ять чисел.`);
// }

// Завдання №5

// // Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
//  Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let positiv = 0;
// let negetiv = 0;
// let zero = 0;
// let evenPARNI = 0;
// let oddNEparni = 0;

// for (let i = 1; i <= 10; i++) {
//   let TenDigits = prompt(`Write ten Digits`);

//   if (TenDigits > 0) {
//     positiv++;
//   }
//   if (TenDigits < 0) {
//     negetiv++;
//   }
//   if (TenDigits == 0) {
//     zero++;
//   }

//   let parne = TenDigits % 2;

//   // умова ? якщо трю : якщо фальш
//   parne == 0 ? evenPARNI++ : oddNEparni++;

//   // Аналогічно - АЛЕ довгий шлях ==========

//   // if (parne == 0) {
//   //   evenPARNI++;
//   // } else {
//   //   oddNEparni++;
//   // }
// }

// document.write(
//   `Позитивних чисел ${positiv} Негативних ${negetiv} Нулів ${zero} Парних ${evenPARNI} Не парних ${oddNEparni}`
// );

// Завдання №6

// // Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить,
// хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// let playCalc = true;
// while (playCalc) {
//   let digit_1 = prompt("Напиши число");
//   let digit_2 = prompt("Напиши друге число");

//   let whatToDoWith = prompt("введіть один із знаків '+' '-' '*' '/'");
//   let summCalc = 0;

//   // НЕ БАЧИТЬ ЗНАКИ !!! + чи - і * та /
//   // let WHAT = +whatToDoWith;
//   // let summCalc = +digit_1 + WHAT + +digit_2;
//   // // alert(`Ви отримаєте ${+digit_1}`);
//   // ================================================

//   if (whatToDoWith == "+") {
//     summCalc = +digit_1 + +digit_2;
//   }
//   if (whatToDoWith == "-") {
//     summCalc = +digit_1 - +digit_2;
//   }
//   if (whatToDoWith == "/") {
//     summCalc = +digit_1 / +digit_2;
//   }
//   if (whatToDoWith == "*") {
//     summCalc = +digit_1 * +digit_2;
//   }

//   alert(`Ви отримаєте ${summCalc}`);

//   let doUwantM = prompt(`Бажаєш рішити ще один приклад ? (yes/no)`);
//   if (doUwantM == "no") {
//     playCalc = false;
//   }
// }

// Завдання №7
// Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let anyDigits = prompt("Напиши число");
let key = prompt("На скільки зсунути");

// let numberOfAnyDigits = anyDigits.length;
// let result = 0;
anyDigits = Number(anyDigits);
key = Number(key);
if (anyDigits >= 0 && anyDigits <= 9) {
  document.write(anyDigits + key);
} else if (anyDigits >= 10 && anyDigits <= 99) {
  let firstDigit = Math.floor(anyDigits / 10);
  let secondDigit = anyDigits % 10;
  document.write(`${firstDigit + key}${secondDigit + key}`);
} else if (anyDigits >= 100 && anyDigits <= 999) {
  let firstDigit = Math.floor(anyDigits / 100);
  let secondDigit = anyDigits - firstDigit * 100;

  let thirdDigit = anyDigits % 10;
  document.write(`${firstDigit + key}${secondDigit + key}${thirdDigit + key}`);
}

// firstDigit += key;
