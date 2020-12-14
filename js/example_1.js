

'use strict';



const user = [
    {
        name: 'Anna',
        age: 22,
        repos: {
            folowers: 15,
            following: 10
        },
        isActive: true,
    },
    {
        name: 'Joshua',
        age: 22,
        repos: {
            folowers: 15,
            following: 30
        },
        isActive: false,
    },
    {
        name: 'Bob',
        age: 22,
        repos: {
            folowers: 2,
            following: 0
        },
        isActive: true,
    },
]

const userCopy = [...user];                                 //------> Создали копию массива через ...spread
console.log(userCopy);

const findUser = function (name, arr) {                    //------> Создали функцию для поиска имени
    for (const elem of arr) {
        if (elem.name === name) {
            console.log(elem);                             //------> Нашли нужное имя
            return { ...elem, id: 3456, isActive: false }; //------> Изменили информацию в объекте с нашим именем (если ..spread будет в конце инф.не добавится)
        }
    }
}

console.log(findUser('Anna', user));