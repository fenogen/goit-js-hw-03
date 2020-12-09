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
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: []
};

let amount = 0; 
let id = 0;
let type = 0

amount = 5100;
const createTransaction = function(amount, type) { 
  console.log(amount);
  account.balance = amount;
  id = id + 0.01;
  type = Transaction.DEPOSIT;
  account.transactions.push({ id, type, amount });
  console.log(`Вы успешно пополнили ваш счет. Ваш баланс = ${account.balance} $`);
  console.log(account.transactions);
  return;
}

createTransaction(amount, type);

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

amount = 10000; // СНИМАЕМ
const deposit = function (amount) {
  console.log(`Вы пытаетесь снять ${amount} $`);

  if (account.balance < amount) {
    console.log('Cнятие такой суммы не возможно, недостаточно средств на счету')
    id = id + 0.01;
    type = 'Error';
    amount = 0;
    account.transactions.push({ id, type, amount });
    console.log(account.transactions);
    return;
  }

  account.balance = account.balance - amount;
  console.log(`Деньги успешно сняты. Ваш баланс = ${account.balance} $`);
  id = id + 0.01;
  type = Transaction.WITHDRAW;
  account.transactions.push({ id, type, amount });
  console.log(account.transactions);
  return;
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