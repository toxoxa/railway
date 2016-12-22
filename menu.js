'use strict';
const OPTIONS_LIST =
`
***************************
1. Добавить поезд
2. Удалить поезд
3. Разработать мартшрут
4. Вывести все поезда по заданному пункту отправления и времени прибытия;
5. Вывести все поездав по заданному пункту отправления и назначения.
***************************
`;

function options(rl) {
  return new Promise((resolve, reject) => {
    rl.question(OPTIONS_LIST, (answer) => {
      if (answer.match(/^[1-5]$/)) {
        resolve(+answer)
      } else {
        reject('Выбрано неверное дествие')
      }
    })
  })
}

function getTrain(rl) {
   //TODO Написать дописать считывание хар-к поезда(да, да, каждая с промисом) по аналогии с getSchedule
}

module.exports.options = options;
