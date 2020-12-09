// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.


'use strict'; 

const checkForSpam = function (message) {
    let messageLow = message.toLowerCase();
    const messageArray = messageLow.split(' ');
    console.log(messageArray);
    const question = messageArray.includes('sale') || messageArray.includes('spam') || messageArray.includes('[spam]')
        ? 'true (spam/sale - есть такое слово)' : 'false (spam/sale - нет такого слова)';
    console.log(question);
    return;
};

checkForSpam('Latest technology news'); // false

checkForSpam('JavaScript weekly newsletter'); // false

checkForSpam('Get best sale offers now!'); // true

checkForSpam('[SPAM] How to earn fast money?'); // true