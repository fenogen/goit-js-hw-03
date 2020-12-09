// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.


'use strict'; 


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.table(products);

const getAllPropValues = function (arr, prop) {
    const nameArray = [];
    
    for (const product of arr) {
    // Перебрали элементы и добавляем в массив для вывода.
    nameArray.push(product[prop]) // ----> product.prop НЕ проходит в данном случае!
    
    }

    console.log(nameArray);
    return;
};



getAllPropValues(products, 'name'); // ['Радар', 'Сканер', 'Дроид', 'Захват']

getAllPropValues(products, 'quantity'); // [4, 3, 7, 2]

getAllPropValues(products, 'category'); // []

