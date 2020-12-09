// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и
// возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

'use strict';

const findBestEmployee = function (employees) {
  console.table(employees);
  
  let empValue = 0;
  let empName;
  
  for (const key in employees) {
    const value = employees[key];
    
    if (empValue < value) {
      empValue = value;
      empName = key;
    }
  }
  
  console.log(
  `Самый продуктивный сотрудник года: ${empName}. Он выполнил - ${empValue} задач`,
  )
  return;
};

findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }) // lorence


findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }) // mango

findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }) // lux
