'use strict';
const Train = require('./Train');
const data = require('./stdio');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const list = []

data.read('data.json')
   .then(data => data.forEach(cfg => list.push(new Train(cfg))))
   //.then(showMenu)
   .then(console.log(list))
   .catch(console.log);
