// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.


'use strict'; 

//  Типов транзацкий всего два.
//  Можно положить либо снять деньги со счета.
// Каждая транзакция это объект со свойствами: id, type и amount
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  ERROR: 'Error',
};

const account = {
  balance: 0,       // Текущий баланс счета
  transactions: []  // История транзакций
};

let amount = 0; 
let id = 0;
let type = 0
let message;

message = prompt('Введите сумму для ПОПОЛНЕНИЯ денежных средств');

const createTransaction = function (amount, type) {
  while (message === null) {
    alert('Отменено пользователем');
    return;
  }
  if (message > 1) {
    amount = Number(message);
    account.balance = amount;
    id = id + 0.01;
    type = Transaction.DEPOSIT;
    account.transactions.push({ id, type, amount });
    alert(`Вы успешно пополнили ваш счет на ${amount} $ . Ваш баланс = ${account.balance} $`);
    console.log(account.transactions);
    return;
  }

  alert('Было введено не число, попробуйте еще раз');
  message = prompt('Введите сумму для пополнения');
}

createTransaction(amount, type);

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

message = prompt('Введите сумму для СНЯТИЯ денежних средств');

const deposit = function (amount) {
  while (message === null) {
    alert('Отменено пользователем');
    return;
  }
  if (message > 1 && account.balance < message) {
    amount = Number(message);
    alert(`Cнятие такой суммы не возможно, недостаточно средств на счету. Ваш баланс всего: ${account.balance}`);
    id = id + 0.01;
    type = 'Error';
    amount = 0;
    account.transactions.push({ id, type, amount });
    console.log(account.transactions);
    return;
  } if (message > 1 && account.balance > message) {
    amount = Number(message);
    account.balance = account.balance - amount;
    alert(`Деньги успешно сняты. Ваш баланс = ${account.balance} $`);
    id = id + 0.01;
    type = Transaction.WITHDRAW;
    account.transactions.push({ id, type, amount });
    console.table(account.transactions);
    return;
  }
  alert('Было введено не число, попробуйте еще раз');
  // message = prompt('Введите сумму для СНЯТИЯ денежних средств еще раз');
}

deposit(amount);

//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.

const withdraw = function(amount) {};
//    * Метод возвращает текущий баланс


//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };