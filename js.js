let res = '';
let numFirst = 0;
let numSecond = 1;
let count = 0;

//1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

// for (let i = 10; i < 21; i++) {
//   res += i + ', ';
// }

// document.write(res.slice(0, -2));

//2. Вивести квадрати чисел від 10 до 20.

// for (let i = 10; i < 21; i++) {
//   res += i ** 2 + ', ';
// }

// document.write(res.slice(0, -2));

//3. Вивести таблицю множення на 7.

// for (let i = 1; i < 11; i++) {
//   res += i * 7 + ', ';
// }

// document.write(res.slice(0, -2));

//4. Знайти суму всіх цілих чисел від 1 до 15.

// for (let i = 1; i < 16; i++) {
//   num += i;
// }

// document.write(numFirst);

//5. Знайти добуток усіх цілих чисел від 15 до 35.

// for (let i = 15; i < 36; i++) {
//   numSecond *= i;
// }

// document.write(numSecond);

//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// for (let i = 0; i < 501; i++) {
//   numFirst += i;
//   count++;
// }

// document.write(numFirst / count);

//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

// for (let i = 30; i < 81; i++) {
//   if (i % 2 == 0) {
//     numFirst += i;
//   }
// }
// document.write(numFirst);

//8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// for (let i = 100; i < 201; i++) {
//   if (i % 3 == 0) {
//     res += i + ' ';
//   }
// }
// document.write(res);

//9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

// let number = 11;
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     res += i + ' ';
//   }
// }
// document.write(res);

//10. Визначити кількість його парних дільників.

// let number = 10;
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     count++;
//   }
// }
// document.write(count);

//11. Знайти суму його парних дільників.

// let number = 10;
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     numFirst += i;
//     console.log(numFirst);
//   }
// }

// document.write(numFirst);

//12. Надрукувати повну таблицю множення від 1 до 10.

// let arr = [];

// for (let i = 1; i < 11; i++) {
//   for (let j = 1; j < 11; j++) {
//     arr[i] = j * i;
//     console.log(arr[i]);
//     document.write(arr[i] + '&nbsp;&nbsp;');
//   }
//   document.write('<br>');
// }

//13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

// for (let i = 20; i < 30; i++) {
//   res += i + ' ' + (i + 0.5) + ' ';
// }

// document.write(res);

//14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

// let dollar = 27;
// let cost = 0;
// for (let i = 0; i < 11; i++) {
//   cost = dollar * i * 10;
//   res = `${dollar} * ${i * 10} = ${cost}`;
//   document.write(res + '<br>');
// }

// 15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

// let number = 100;
// for (let i = 1; i < 101; i++) {
//   if (i ** 2 < number) {
//     document.write(i + '<br>');
//   }
// }

//16. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// let number = 2;
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     count++;
//     console.log(count);
//     // console.log(i);
//   }
// }
// if (count <= 2) {
//   document.write(true);
// }

// 17. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// let number = 9;

// for (let i = 0; i < number; i++) {
//   if (number != 3) {
//     number = Math.sqrt(number);
//     count++;
//   } else {
//     console.log(`3 в ${count + 1} ступіні`);
//   }
// }
