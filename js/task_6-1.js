// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в
// еременную total.Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.Если хочешь,
// в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.



'use strict'; 


let input;
let total = 0;
const numbers = [];

do {
  input = prompt('Введите целое число');
  if (input === null) {
    alert(`Общая сумма ${total}`);
    break;
  }
  if (input >= 1) {
    input = Number(input);
    total += input;                            // ------> подсчет суммы делается не через массив.
    numbers.push(input);
    console.log(numbers);
    console.log(`Общая сумма ${total}`);
    continue;
  } else {
    console.log('Было введено не число, попробуйте еще раз');
    break;
  }
} while (true);