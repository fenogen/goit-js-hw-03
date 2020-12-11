

'use strict';



const countTotalSalary = function (employees) {
    console.table(employees);

    let total = 0;

    for (const key in employees) {
        const value = employees[key];
        total += value;
    }
    console.log(`Общая сумма запрплат работников = ${total}`);
    return;
};




countTotalSalary({
}) // 0

countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }) // 330


countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }) // 400


