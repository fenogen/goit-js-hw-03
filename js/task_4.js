// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...',
// после чего возвращает укороченную версию.


'use strict';


const formatString = function (string) {

    const textArray = string.split('');

    const textLength = textArray.length;

    if (textLength > 40) {
        textArray.length = 40;
        const textString = textArray.join('');
        const textEnd = textString + '...';
        console.log(textEnd);
        console.log(`Общая длина строки: ${textEnd.length}`);
        return;
    }
        console.log(string);
        console.log(`Общая длина строки: ${string.length}`);
}

formatString('Curabitur ligula sapien, tincidunt non.');

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');

formatString('Curabitur ligula sapien.');

formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');

