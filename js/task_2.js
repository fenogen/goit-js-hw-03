

'use strict';

const countProps = function(obj) {
    const arrayKeys = Object.keys(obj);
    const sumIndex = arrayKeys.length;
    console.log(`Колличество свойств в объекте: ${sumIndex}`);
};


countProps({}); // 0

countProps({ name: 'Mango', age: 2 }); // 2

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3