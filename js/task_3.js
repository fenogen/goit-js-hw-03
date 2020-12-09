// // Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.



'use strict';


const findLongestWord = function (string) {
    const textArray = string.split(' ');
    console.log(textArray);
    let word = '';                                    // ----------> Сравнили с пустой стройкой

    for (let i = 0; i < textArray.length; i += 1) {
        const item = textArray[i];
        
        if (word.length < item.length) {
            word = item;   
        }
    }
    console.log(word);
    return;
}


findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'

findLongestWord('Google do a roll'); // 'Google'

findLongestWord('May the force be with you'); // 'force'