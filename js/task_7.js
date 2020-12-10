// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

'use strict';

let amount = 0;
let id = 0;
let type = 0;
let message;
let messageMain;
let date = new Date();

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  ERROR: 'Error',
};

const account = {
  balance: 100, // Текущий баланс счета
  transactions: [{ id, type, amount, date }], // История транзакций
};

console.log('Question #1');

while (true || false) {
  messageMain = confirm('Вы хотите пополнить свой счет?');

  if (messageMain === true) {
    console.log('hello I am your DEPOSIT-fuction');
    message = prompt('Введите сумму для ПОПОЛНЕНИЯ денежных средств');

    const deposite = function (amount) {
      while (message >= 1) {
        amount = Number(message);
        account.balance += amount;

        id = id + 0.01;
        type = Transaction.DEPOSIT;
        account.transactions.push({ id, type, amount, date });
        alert(
          `Вы успешно пополнили ваш счет на ${amount} $ . Ваш баланс = ${account.balance} $`,
        );
        return;
      }
      if (message === null) {
        alert('Отменено пользователем');
        return;
      }
      if (message !== Number(message)) {
        alert('Было введено не число, попробуйте еще раз');
        return;
      }
    };
    deposite(amount);
  }

  if (messageMain === false) {
    console.log('Question #2');
    messageMain = confirm('Вы хотите снять свои деньги?');

    if (messageMain === true) {
      console.log('hello I am your WITHDRAW-fuction');
      message = prompt('Введите сумму для СНЯТИЯ денежних средств');

      const withdraw = function (amount) {
        while (message === null) {
          alert('Отменено пользователем');
          return;
        }
        if (message > 1 && account.balance < message) {
          amount = Number(message);
          alert(
            `Cнятие такой суммы не возможно, недостаточно средств на счету. Ваш баланс всего: ${account.balance}`,
          );
          id = id + 0.01;
          type = 'Error';
          amount = 0;
          account.transactions.push({ id, type, amount, date });
          // console.table(account.transactions);
          return;
        }
        if (message > 1 && account.balance >= message) {
          amount = Number(message);
          account.balance = account.balance - amount;
          alert(`Деньги успешно сняты. Ваш баланс = ${account.balance} $`);

          id = id + 0.01;
          type = Transaction.WITHDRAW;
          account.transactions.push({ id, type, amount, date });
          // console.table(account.transactions);
          return;
        }
        if (message !== Number(message)) {
          alert('Было введено не число, попробуйте еще раз');
          return;
        }
      };
      withdraw(amount);
    } 
  
    if (messageMain === false) {
      console.log('Question #3');
      messageMain = confirm('Вы хотите посмотреть свой баланс?');
    
      if (messageMain === true) {
        console.log('hello I am your BALANCE-fuction');
        alert(`Ваш баланс = ${account.balance}`);
      }
    
      if (messageMain === false) {
        console.log('Question #4');
        messageMain = confirm('Вы хотите посмотреть всю историю транзакций?');
      
        if (messageMain === true) {
          console.log('hello I am your Transaction-fuction');
          console.table(account.transactions);
          break;
        }
        if (messageMain === false) {
          console.log('Good bye');
          alert('Досвидание')
          break;
        }
      }
    }
  }
}