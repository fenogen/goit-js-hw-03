

'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user);

console.log('Заменяем значение ключей:')
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
console.log(user);

console.log('Выводим массив из ключей:');
const arrayKeysOfUser = Object.keys(user);
console.table(arrayKeysOfUser);

console.log('Выводим каждый элемент ключа из массива:');
for (const item of arrayKeysOfUser) {
    console.log(item);
}


console.log('Выводим каждый элемент ключа напрямую из объекта:');
for (const key in user) {
    console.log(key);
}





