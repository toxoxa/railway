'use strict';
const OPTIONS_LIST =
`

1. Добавить поезд
2. Удалить поезд
3. Разработать мартшрут
4. Вывести все поезда по заданному пункту отправления и времени прибытия;
5. Вывести все поезда по заданному пункту отправления и назначения.

`;

function options(rl) {
  return new Promise((resolve, reject) => {
    rl.question(OPTIONS_LIST, (answer) => {
      if (answer.match(/^[1-5]$/)) {
        resolve(+answer)
      } else {
        reject('Неверно введен пункт меню')
      }
    })
  })
}

function getTrain(rl) {
   function getNumber() {
      let cfg = {};
      return new Promise((resolve, reject) => {
         rl.question('Введите номер поезда: ', (answer) => {
            if (answer.match(/\d+$/)) {
               cfg.number = +answer;
               resolve(cfg)
            } else {
               reject('Неверно введен номер поезда. Необходимо ввести число')
            }
         })
      }).catch((err) => {
         console.log(err);
         return getNumber();
      })
   }

   function getCost() {
      let cfg = {};
      return new Promise((resolve, reject) => {
         rl.question('Введите цену билета(руб.коп): ', (answer) => {
            if (answer.match(/\d+\.\d\d$/)) {
               cfg.cost = answer;
               resolve(cfg)
            } else {
               reject('Неверно введена цена билета. Необходимо ввести число')
            }
         })
      }).catch((err) => {
         console.log(err);
         return getCost();
      })
   }

   function getDeparturePoint() {
      let cfg = {};
      return new Promise((resolve, reject) => {
         rl.question('Введите пункт отправления: ', (answer) => {
            if (answer.match(/[a-zA-Zа-яА-Я]+$/)) {
               cfg.departurePoint = answer;
               resolve(cfg)
            } else {
               reject('Неверно введен пункт отправления.')
            }
         })
      }).catch((err) => {
         console.log(err);
         return getDeparturePoint();
      })
   }

   function getDestinationPoint() {
      let cfg = {};
      return new Promise((resolve, reject) => {
         rl.question('Введите пункт назначения: ', (answer) => {
            if (answer.match(/[a-zA-Zа-яА-Я]+$/)) {
               cfg.destinationPoint = answer;
               resolve(cfg)
            } else {
               reject('Неверно введен пункт назначения.')
            }
         })
      }).catch((err) => {
         console.log(err);
         return getDestinationPoint();
      })
   }

   function getDepartureTime() {
      let cfg = {};
      return new Promise((resolve, reject) => {
         rl.question('Введите время отправения: ', (answer) => {
            if (answer.match(/\d\d:\d\d$/)) {
               cfg.departureTime = answer;
               resolve(cfg)
            } else {
               reject('Неверно введено время отправления.')
            }
         })
      }).catch((err) => {
         console.log(err);
         return getDepartureTime();
      })
   }

   function getDestinationTime() {
      let cfg = {};
      return new Promise((resolve, reject) => {
         rl.question('Введите время прибытия: ', (answer) => {
            if (answer.match(/\d\d:\d\d$/)) {
               cfg.destinationTime = answer;
               resolve(cfg)
            } else {
               reject('Неверно введено время прибытия.')
            }
         })
      }).catch((err) => {
         console.log(err);
         return getDestinationTime();
      })
   }

   return getNumber().then(getCost).then(getDeparturePoint).then(getDestinationPoint).then(getDepartureTime).then(getDestinationTime);
}

function getTrainNumber(rl, max) {
  const MIN_VALUE = 0;
  return new Promise((resolve, reject) => {
    rl.question('Введите номер: ', (answer) => {
      let num = +answer;
      if (!isNaN(num) && +answer >= MIN_VALUE && num <= max) {
        resolve(num)
      } else {
        reject('Неверно введен номер')
      }
    })
  })
}

module.exports.options = options;
module.exports.getTrain = getTrain;
module.exports.getTrainNumber = getTrainNumber;
